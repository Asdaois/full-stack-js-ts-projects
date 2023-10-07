import { PropsSimple } from 'types/Common'
import { SWRConfig } from 'swr'
import fetchJson from 'lib/fetchJson'

export function ConfigurarSWR ({ children }: PropsSimple) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: err => {
          console.error(err)
        }
      }}
    >
      {children}
    </SWRConfig>
  )
}
