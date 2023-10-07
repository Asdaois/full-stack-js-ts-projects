import { User } from 'types/User'
import { db } from './db.server'

export class UsuarioDB {
  static async guardarUsuarioNuevo (usuario: User) {
    try {
      await db.user.create({
        data: usuario
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }

  static async obtenerTodos (): Promise<User[]> {
    return await db.user.findMany()
  }

  static async encontrarPorUsuario (usuario: string): Promise<User | null> {
    return await db.user.findUnique({
      where: {
        usuario
      }
    })
  }

  static async eliminarUsurarioPorId (unaId: string): Promise<User> {
    return await db.user.delete({
      where: {
        id: +unaId
      }
    })
  }
}
