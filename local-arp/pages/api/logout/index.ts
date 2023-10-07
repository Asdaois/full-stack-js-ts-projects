// pages/api/logout.ts

import { NextApiRequest, NextApiResponse } from 'next'

import { withSession } from 'lib/session'

function logoutRoute (req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy()
  res.json(null)
}

export default withSession(
  logoutRoute
)
