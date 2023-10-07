'use client'

import { ConfigurarSWR } from 'components/ConfigurarSWR'
import LoginForm from 'components/Login'

export default function Page () {
  return (
    <ConfigurarSWR>
      <LoginForm />
    </ConfigurarSWR>
  )
}
