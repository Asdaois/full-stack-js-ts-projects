'use client'

import React, { useEffect, useState } from 'react'

import { CargandoDispositivos } from './loading'
import { ControlDeOperador } from '../../components/Operador/OperadorControl'
import { Dispositivos } from '../../components/Dispositivos/Dispositivos'
import { EncabezadoSecundario } from 'components/Typography/EncabezadoSecundario'
import { VerMas } from 'components/Actions/VerMas'
import { Warning } from 'components/Alerts/Warning'
import { useDispositivos } from 'lib/useDispositivos'

export function HandlerDispositivos () {
  const {
    dispositivosImportantes,
    dispositivosNecesitandoRevision,
    estaCargando,
    parámetrosDeBúsqueda,
    cambiarParámetrosDeBúsqueda
  } = useDispositivos()

  const [verDispositivosNormales, setVerDispositivosNormales] = useState(true)

  useEffect(() => {
    if (dispositivosNecesitandoRevision()?.length === 0) {
      setVerDispositivosNormales(true)
    }
  }, [dispositivosNecesitandoRevision])

  if (estaCargando && dispositivosImportantes()?.length === 0) {
    return <CargandoDispositivos />
  }

  return (
    <div className='flex flex-col gap-4 '>
      <EncabezadoSecundario>Control</EncabezadoSecundario>
      <ControlDeOperador
        actualizarValoresExternos={parámetrosActualizados => {
          console.log(parámetrosActualizados)
          cambiarParámetrosDeBúsqueda(parámetrosActualizados)
        }}
      />
      {dispositivosNecesitandoRevision()?.length > 0 && (
        <Warning mensaje='Hay Dispositivos que requieren su atención'>
          <VerMas
            onVerMas={() => {
              setVerDispositivosNormales(false)
            }}
            onCancelar={() => {
              setVerDispositivosNormales(true)
            }}
          />
        </Warning>
      )}
      <EncabezadoSecundario>
        Dispositivos{' '}
        {verDispositivosNormales
          ? ''
          : `que están desconectados mas de ${parámetrosDeBúsqueda.vecesDesconectado} veces `}
      </EncabezadoSecundario>
      <Dispositivos
        dispositivos={
          verDispositivosNormales
            ? dispositivosImportantes()
            : dispositivosNecesitandoRevision()
        }
      />
    </div>
  )
}
