import { Dispositivo as GDispositivo } from '@prisma/client'

export type Dispositivo = GDispositivo;

type Ip = { ip: string | undefined };
type Estado = { estado: boolean };
export type VecesDesconectado = { vecesDesconectado: number };

export type Dispositivos = Array<Dispositivo>;
export type DispositivosConIp = Array<Dispositivo & Ip>;
export type DispositivosConIpYEstado = Array<Dispositivo & Ip & Estado>;
export type DispositivosInformaciónCompleta = Array<
  Dispositivo & Ip & Estado & VecesDesconectado
>;
