import {
  Dispositivo,
  Dispositivos,
  DispositivosConIp,
  DispositivosConIpYEstado,
  DispositivosInformaciónCompleta
} from 'types/Dispositivo'
import find, { IDevice } from 'local-devices'

import { dbDispositivos } from 'databases/Dispositivos.db'
import { dbRangos } from 'databases/Rangos.db'
import ping from 'ping'

export default class EncontrarDispositivosEnRed {
  static alarmaDispositivos: Map<string, number> = new Map()

  public static async ejecutar () : Promise<DispositivosInformaciónCompleta> {
    let result: DispositivosInformaciónCompleta = []
    const dispositivos: IDevice[] = []
    console.log('Obteniendo los rangos a revisar')
    const rangos = await dbRangos.dataForArp()

    console.log('Buscando dispositivos')
    await this.encontrarDispositivosEnRango(rangos, dispositivos)

    console.log('Guardando dispositivos encontrados en base de datos')
    await this.guardarDispositivosEncontradosEnBasedDeDatos(dispositivos)

    const diccionarioTemporariasIP =
      this.mapearDispositivosEncontrados(dispositivos)

    const dispositivosEnBaseDatos = await dbDispositivos.obtenerTodos()

    console.log('Mapeando los dispositivos con su actual IP')
    const dispositivosConActualIP: DispositivosConIp =
      this.asignarDireccionesIpADispositivos(
        dispositivosEnBaseDatos,
        diccionarioTemporariasIP
      )

    console.log('Revisar si hay un equipo desconectado')
    const dispositivosResultado: DispositivosConIpYEstado =
      await this.actualizarEstadoDeConexiónDeDispositivo(
        dispositivosConActualIP
      )

    console.log('Analizar estado de los dispositivos')
    this.analizarEstadoDispositivos(dispositivosResultado)

    result = dispositivosResultado.map((dispositivo) => ({
      ...dispositivo,
      vecesDesconectado: this.alarmaDispositivos.get(dispositivo.mac) ?? 0
    }))

    console.log('los equipos han sido encontrados')
    return result
  }

  private static analizarEstadoDispositivos (
    dispositivosResultado: DispositivosConIpYEstado
  ) {
    for (const dispositivo of dispositivosResultado) {
      const mac = dispositivo.mac
      const estaConectado = dispositivo.estado
      const numeroDeVecesDesconectado = this.alarmaDispositivos.get(mac)

      if (numeroDeVecesDesconectado === undefined) {
        this.alarmaDispositivos.set(mac, estaConectado ? 0 : 1)
        continue
      }

      if (dispositivo.estado) {
        this.alarmaDispositivos.set(mac, 0)
        continue
      }

      this.alarmaDispositivos.set(mac, numeroDeVecesDesconectado + 1)
    }
  }

  static async actualizarEstadoDeConexiónDeDispositivo (
    dispositivosConActualIP: DispositivosConIp
  ): Promise<DispositivosConIpYEstado> {
    const dispositivosResultado: DispositivosConIpYEstado = []

    for (const dispositivo of dispositivosConActualIP) {
      const estado = await ping.promise.probe(dispositivo.ip as string)
      dispositivosResultado.push({ ...dispositivo, estado: estado.alive })
    }
    return dispositivosResultado
  }

  static asignarDireccionesIpADispositivos (
    dispositivosEnBaseDatos: Dispositivos,
    diccionarioTemporariasIP: Map<string, string>
  ): DispositivosConIp {
    return dispositivosEnBaseDatos.map((dispositivo) => ({
      ...dispositivo,
      ip: diccionarioTemporariasIP.get(dispositivo.mac)
    }))
  }

  static mapearDispositivosEncontrados (dispositivos: find.IDevice[]) {
    return new Map(
      dispositivos.map((dispositivo) => [dispositivo.mac, dispositivo.ip])
    )
  }

  static async guardarDispositivosEncontradosEnBasedDeDatos (
    dispositivos: find.IDevice[]
  ) {
    for (const _dispositivo of dispositivos) {
      const dispositivo: Dispositivo = { ..._dispositivo, descripcion: '' }
      await dbDispositivos.intentarGuardar(dispositivo)
    }
  }

  static async encontrarDispositivosEnRango (
    rangos: string[],
    dispositivos: find.IDevice[]
  ) {
    for (const rango of rangos) {
      const resultadoRango = await find({ address: rango })
      dispositivos.push(...resultadoRango)
    }
  }
}
