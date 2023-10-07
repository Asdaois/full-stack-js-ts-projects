import { NextApiHandler } from 'next'
import type { User } from 'types/User'
import { sessionOptions } from './sessionOptions'
import { withIronSessionApiRoute } from 'iron-session/next'

// Aca es donde definimos el tipo del usuario
declare module 'iron-session' {
  // eslint-disable-next-line no-unused-vars
  interface IronSessionData {
    user?: User
  }
}

export function withSession (loginRoute: NextApiHandler) {
  return withIronSessionApiRoute(loginRoute, sessionOptions)
}
