'use client'

import { ConfigurarSWR } from 'components/ConfigurarSWR'
import { HandlerDispositivos } from './HandlerDispositivos'
import React from 'react'

export default function Page () {
  return (
    <ConfigurarSWR>
      <HandlerDispositivos />
    </ConfigurarSWR>
  )
}
