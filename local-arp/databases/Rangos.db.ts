import { Rango, Rangos } from '../types/Rango'

import { db } from './db.server'

class RangosDB {
  get dataRaw (): Promise<Rangos> {
    return db.rango.findMany()
  }

  public async dataForArp (): Promise<Array<string>> {
    const rangosRaw = await this.dataRaw
    return rangosRaw.map(
      (rango) =>
        `${rango.prefijo}.${rango.desde}-${rango.prefijo}.${rango.hasta}`
    )
  }

  public async agregar (newRango: Rango): Promise<Rango> {
    return await db.rango.create({
      data: {
        prefijo: newRango.prefijo,
        desde: +newRango.desde,
        hasta: +newRango.hasta
      }
    })
  }
}

export const dbRangos = new RangosDB()
