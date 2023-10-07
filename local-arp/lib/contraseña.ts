import bcrypt from 'bcrypt'

export class Contraseña {
  static async cifrar (contraseña: string): Promise<string> {
    return bcrypt.hash(contraseña, 10)
  }

  static async sonIguales (
    contraseña: string,
    contraseñaCifrada: string
  ): Promise<boolean> {
    return bcrypt.compare(contraseña, contraseñaCifrada)
  }
}
