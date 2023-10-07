import { FormEvent, useState } from 'react'

import { ApiError } from 'types/ApiError'
import { Button } from './Button'
import Danger from './Alerts/Danger'
import { FormItem } from './FormItem'
import { User } from 'types/User'
import fetchJson from 'lib/fetchJson'
import { useRouter } from 'next/navigation'
import useUser from 'lib/useUser'

export default function LoginForm () {
  const [error, setError] = useState<ApiError | null>(null)
  const { mutateUser } = useUser()
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const body = {
      password: event.currentTarget.password.value,
      usuario: event.currentTarget.usuario.value
    }

    try {
      const user = await fetchJson<User | ApiError>('/api/login', {
        body: JSON.stringify(body),
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })

      if (Object.hasOwn(user, 'id')) {
        mutateUser(user as User)
        router.push('/dispositivos')
      } else {
        const apiError = user as ApiError
        setError(apiError)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {error && <Danger mensaje={error.error} descripcion={error.message} />}
      <form action='/api/login' method='post' onSubmit={handleSubmit}>
        <FormItem
          inputProps={{ required: true }}
          label='Usuario'
          name='usuario'
          type='string'
          placeholder='admin'
        />
        <FormItem
          inputProps={{ required: true }}
          label='Contraseña'
          name='password'
          type='password'
          placeholder='*********'
        />
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}
