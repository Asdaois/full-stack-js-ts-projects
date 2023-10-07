'use client'

import { User } from 'types/User'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'

export default function useUser ({
  redirectTo = '',
  redirectIfFound = false
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User | null>('/api/user')
  const router = useRouter()

  useEffect(() => {
    if (!redirectTo || !user) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && user === null) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user !== null)
    ) {
      router.push(redirectTo)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}
