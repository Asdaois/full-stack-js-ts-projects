import {
  Dispositivo,
  DispositivosInformaciónCompleta
} from '../../../types/Dispositivo'
import type { NextApiRequest, NextApiResponse } from 'next'

import EncontrarDispositivosEnRed from 'controllers/dispositivos/EncontrarDispositivosEnRed'
import ModificarDispositivo from 'controllers/dispositivos/ModificarDispositivo'
import { withSession } from 'lib/session'

async function handler (
  req: NextApiRequest,
  res: NextApiResponse<DispositivosInformaciónCompleta>
) {
  let status: number = 500
  let result: DispositivosInformaciónCompleta = []
  let redirect: string | null = null

  switch (req.method) {
    case 'GET': {
      status = 200
      result = await EncontrarDispositivosEnRed.ejecutar()
      break
    }
    case 'POST': {
      const dispositivo = req.body as Dispositivo
      await ModificarDispositivo.ejecutar(dispositivo)
      status = 200
      redirect = '/dispositivos'
      break
    }
    default:
      status = 404
      break
  }

  if (redirect) {
    res.redirect(redirect)
  } else {
    res.status(status).json(result)
  }
}

export default withSession(handler)
