import { User as UserGenerated } from '@prisma/client'

export type User = UserGenerated;

export type Usuarios = Array<User>;

export interface UsuarioDatosDeInicioDeSesión {
  password: string;
  usuario: string;
}

export type DatosUsuarioNuevo = User & {
  passwordConfirmation?: string;
};
