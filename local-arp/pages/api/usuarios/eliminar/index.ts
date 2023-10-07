import { NextApiRequest, NextApiResponse } from 'next'

import { UsuarioDB } from 'databases/Usuarios.db'

export default async function handler (request: NextApiRequest, response: NextApiResponse) {
  try {
    const idDeUsuario = request.body.id

    UsuarioDB.eliminarUsurarioPorId(idDeUsuario)
    response.redirect('/usuarios')
  } catch (error) {

  }
}
