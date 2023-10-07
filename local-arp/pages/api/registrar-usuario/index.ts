import { NextApiRequest, NextApiResponse } from 'next'

import CrearOperadorNuevo from 'controllers/operador/CrearOperadorNuevo'
import { DatosUsuarioNuevo } from 'types/User'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const datosRegistro = req.body as DatosUsuarioNuevo

  await CrearOperadorNuevo.ejecutar(datosRegistro)

  res.redirect('/usuarios/agregar')
}
