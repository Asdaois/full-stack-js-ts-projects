import { NextApiRequest, NextApiResponse } from 'next'

import { User } from 'types/User'
import { withSession } from 'lib/session'

async function userRoute (req: NextApiRequest, res: NextApiResponse<User | null>) {
  if (req.session.user) {
    res.json({
      ...req.session.user
    })
  } else {
    res.json(null)
  }
}

export default withSession(userRoute)
