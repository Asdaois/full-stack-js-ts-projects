import { useCallback, useState } from 'react'

import { DispositivosInformaciónCompleta } from 'types/Dispositivo'
import { ParámetrosDeBúsqueda } from 'components/Operador/OperadorControl'
import useSWR from 'swr'

export function useDispositivos () {
  const { data: dispositivos, isValidating } =
    useSWR<DispositivosInformaciónCompleta | null>('/api/dispositivos')

  const [parámetrosDeBúsqueda, cambiarParámetrosDeBúsqueda] =
    useState<ParámetrosDeBúsqueda>({ estado: 'no relevante', nombre: '', vecesDesconectado: 1 })

  const dispositivosImportantes = useCallback(() => {
    if (!dispositivos) return

    let result = [...dispositivos]

    if (parámetrosDeBúsqueda?.estado !== 'no relevante') {
      const estadoQueSeEstaBuscando =
        parámetrosDeBúsqueda?.estado === 'conectados'
      const dispositivosConEstadoFiltrado = dispositivos?.filter(
        (dispositivo) => dispositivo.estado === estadoQueSeEstaBuscando
      )
      result = [...dispositivosConEstadoFiltrado]
    }

    const nombreAFiltrar = parámetrosDeBúsqueda?.nombre
    const dispositivosConNombreFiltrado = result.filter((dispositivo) => {
      return dispositivo.name
        .toLowerCase()
        .includes(nombreAFiltrar.toLowerCase())
    })
    result = [...dispositivosConNombreFiltrado]

    return result
  }, [parámetrosDeBúsqueda, dispositivos])

  const dispositivosNecesitandoRevision = useCallback(() => {
    const result = dispositivos?.filter(
      (dispositivo) =>
        dispositivo.vecesDesconectado >= parámetrosDeBúsqueda.vecesDesconectado
    )
    return result
  }, [dispositivos, parámetrosDeBúsqueda.vecesDesconectado])

  return {
    estaCargando: isValidating,
    dispositivosImportantes,
    dispositivos,
    cambiarParámetrosDeBúsqueda,
    dispositivosNecesitandoRevision,
    parámetrosDeBúsqueda
  }
}
