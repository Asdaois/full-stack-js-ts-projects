import type { NextApiRequest, NextApiResponse } from 'next'

import { Dispositivo } from '../../../types/Dispositivo'
import EncontrarDispositivoPorMAC from 'controllers/dispositivos/EncontrarDispositivoPorMAC'

export default async function handler (
  request: NextApiRequest,
  response: NextApiResponse<Dispositivo | null>
) {
  const { mac } = request.query
  const dispositivo = await EncontrarDispositivoPorMAC.ejecutar(mac as string)

  response.json(dispositivo)
}
