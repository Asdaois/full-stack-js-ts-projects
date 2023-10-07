import { Contraseña } from 'lib/contraseña'
import { DatosUsuarioNuevo } from 'types/User'
import { UsuarioDB } from 'databases/Usuarios.db'

export default class CrearOperadorNuevo {
  static async ejecutar (datosRegistro: DatosUsuarioNuevo) {
    datosRegistro.ficha = +datosRegistro.ficha
    datosRegistro.password = await Contraseña.cifrar(datosRegistro.password)
    datosRegistro.esAdministrador = !!datosRegistro?.esAdministrador
    delete datosRegistro?.passwordConfirmation

    await UsuarioDB.guardarUsuarioNuevo(datosRegistro)
  }
}
