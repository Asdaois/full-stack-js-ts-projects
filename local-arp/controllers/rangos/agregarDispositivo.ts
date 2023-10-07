import { Rango } from 'types/Rango'
import { dbRangos } from 'databases/Rangos.db'

export default class AgregarDispositivo {
  public static async ejecutar (unRango: Rango) {
    await dbRangos.agregar(unRango)
  }
}
