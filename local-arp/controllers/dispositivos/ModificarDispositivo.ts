import { Dispositivo } from 'types/Dispositivo'
import { dbDispositivos } from 'databases/Dispositivos.db'

export default class ModificarDispositivo {
  static async ejecutar (unDispositivo: Dispositivo): Promise<void> {
    await dbDispositivos.actualizar(unDispositivo)
  }
}
