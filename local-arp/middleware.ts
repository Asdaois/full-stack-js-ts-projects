import { NextRequest, NextResponse } from 'next/server'

import { getIronSession } from 'iron-session/edge'
import { sessionOptions } from 'lib/sessionOptions'

export async function middleware (request: NextRequest) {
  const response = NextResponse.next()

  const session = await getIronSession(request, response, sessionOptions)
  // Autorización simple
  const url = request.nextUrl.pathname as string
  const rutaNoEsDispositivos = url !== '/dispositivos'

  if (!session.user?.esAdministrador && rutaNoEsDispositivos) {
    return NextResponse.redirect(new URL('/no-autorizado', request.url))
  }

  if (!session.user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/dispositivos',
    '/rangos/agregar',
    '/usuarios',
    '/usuarios/agregar'
  ]
}
