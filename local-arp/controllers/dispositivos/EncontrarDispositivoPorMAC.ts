import { Dispositivo } from 'types/Dispositivo'
import { dbDispositivos } from 'databases/Dispositivos.db'

export default class EncontrarDispositivoPorMAC {
  public static async ejecutar (unaDirecciónMac: string): Promise<Dispositivo | null> {
    return await dbDispositivos.obtenerPorId(unaDirecciónMac)
  }
}
