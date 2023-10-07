'use client'

import * as React from 'react'

import { LinkData, LinksData } from 'types/Link'
import { linksAdministrador, linksPublic, linksSupervisor } from 'data/links'

import { ConfigurarSWR } from './ConfigurarSWR'
import Link from 'next/link'
import { User } from 'types/User'
import useUser from 'lib/useUser'

export function LinksManager () {
  return (
    <ConfigurarSWR>
      <LinksHandler />
    </ConfigurarSWR>
  )
}

function LinksHandler () {
  const { user } = useUser()
  const links = useLinks(user)

  return <ul className='space-y-2'>{links.map(createSimpleLink)}</ul>
}

function createSimpleLink (link: LinkData): React.ReactElement {
  return (
    <li key={link.label + link.src}>
      <Link href={link.src} className='' legacyBehavior>
        <span className='cursor-default flex items-center p-2 px-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex-1 whitespace-nowrap'>
          {link.label}
        </span>
      </Link>
    </li>
  )
}

function useLinks (user: User | null | undefined): LinksData {
  const links = React.useCallback(() => {
    const result = [...linksPublic]

    if (user === null || user === undefined) {
      return result
    }

    result.push(...linksSupervisor)

    if (user.esAdministrador) {
      result.push(...linksAdministrador)
    }
    return result
  }, [user])

  return links()
}
