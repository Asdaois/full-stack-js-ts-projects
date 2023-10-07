import { NextApiRequest, NextApiResponse } from 'next'

import { User } from 'types/User'
import { UsuarioDB } from 'databases/Usuarios.db'

export default async function handler (request: NextApiRequest, response: NextApiResponse<Array<User>>) {
  try {
    const usuarios = await UsuarioDB.obtenerTodos()
    console.log({ usuarios })
    response.json(usuarios)
  } catch (error) {

  }
}
