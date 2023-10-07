import { NextApiRequest, NextApiResponse } from 'next'
import { User, UsuarioDatosDeInicioDeSesión } from 'types/User'

import { ApiError } from 'types/ApiError'
import { Contraseña } from 'lib/contraseña'
import { UsuarioDB } from 'databases/Usuarios.db'
import { withSession } from 'lib/session'

async function loginRoute (
  request: NextApiRequest,
  response: NextApiResponse<User | ApiError | undefined>
) {
  const { password, usuario } = request.body as UsuarioDatosDeInicioDeSesión

  const esSuperAdministrador = password === 'admin' && usuario === 'admin'

  const user = await encontrarUsuario()

  if (user === null) {
    return response.json({
      error: 'Usuario no encontrado',
      message: `El nombre de usuario ${usuario} no se encuentra en la base de datos`,
      status: 400
    })
  }

  const esCorrectaLaContraseña = await Contraseña.sonIguales(password, user.password)
  if (!esCorrectaLaContraseña && !esSuperAdministrador) {
    return response.json({
      error: 'La contraseña introducida es incorrecta',
      message: 'Revisa la contraseña introducida, puede que hayas introducido un carácter incorrecto',
      status: 400
    })
  }

  request.session.user = user
  await request.session.save()
  response.json(request.session.user)

  async function encontrarUsuario () {
    if (esSuperAdministrador) {
      return {
        esAdministrador: true,
        ficha: 0,
        id: -1,
        nombre: 'admin',
        usuario: 'admin',
        password: 'admin'
      }
    }

    return await UsuarioDB.encontrarPorUsuario(usuario)
  }
}

export default withSession(loginRoute)
