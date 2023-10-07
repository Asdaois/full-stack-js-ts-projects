import type { NextApiRequest, NextApiResponse } from 'next'

import AgregarDispositivo from 'controllers/rangos/AgregarDispositivo'
import { Rango } from '../../../types/Rango'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let status = 200
  const rango = req.body as Rango
  switch (req.method) {
    case 'POST':
      status = 200
      await AgregarDispositivo.ejecutar(rango)
      res.redirect('/dispositivos')
      break
    default:
      status = 404
      break
  }

  res
    .status(status)
}
