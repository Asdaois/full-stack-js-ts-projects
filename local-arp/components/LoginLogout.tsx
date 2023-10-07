'use client'

import Link from 'next/link'
import fetchJson from 'lib/fetchJson'
import { useRouter } from 'next/navigation'
import useUser from 'lib/useUser'

export function LoginLogout () {
  const router = useRouter()
  const { user, mutateUser } = useUser()

  if (user) {
    return (
      <a
        className='link cursor-pointer'
        onClick={async () => {
          mutateUser(await fetchJson('/api/logout'))
          router.push('/')
        }}
      >
        Cerrar Sesión
      </a>
    )
  }

  return (
    <Link href='/login' className='' legacyBehavior>
      <a className='link'>Iniciar Sesión</a>
    </Link>
  )
}
