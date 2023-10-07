import { Dispositivo, Dispositivos } from '../types/Dispositivo'

import { db } from './db.server'

class DispositivosDB {
  public async obtenerPorId (mac: string): Promise<Dispositivo | null> {
    return await db.dispositivo.findUnique({
      where: {
        mac
      }
    })
  }

  public async intentarGuardar (dispositivo: Dispositivo) {
    try {
      await db.dispositivo.create({
        data: {
          descripcion: dispositivo?.descripcion,
          mac: dispositivo.mac,
          name: dispositivo.name
        }
      })
    } catch (error) {
      // console.log(error)
    }
  }

  public async obtenerTodos (): Promise<Dispositivos> {
    return await db.dispositivo.findMany()
  }

  public async actualizar (dispositivoActualizado: Dispositivo) {
    await db.dispositivo.update({
      where: {
        mac: dispositivoActualizado.mac
      },
      data: dispositivoActualizado
    })
  }
}

export const dbDispositivos = new DispositivosDB()
