import { DispositivosConIpYEstado } from '../types/Dispositivo'

export const getDispositivosRed = async (): Promise<
  DispositivosConIpYEstado | undefined
> => {
  try {
    const response = await fetch('http://localhost:3000/api/dispositivos', {
      next: {
        revalidate: 5
      },
      method: 'GET'
    })
    const data = await response.json()

    return data
  } catch (error: any) {
    console.log('Error fetching data')
  }
}
