# Arp Aplicación

Sunt dignissimos doloremque vitae eos eos doloremque quasi. Rem ratione repellendus quam ullam ut architecto ea id. Commodi voluptatem cum dolor tempore rerum.


## Requerimientos

### Instalación de node 16
### Instalar base de datos
[PostgreSQL](https://www.postgresql.org/download/)

> Escoge la version que esta mas familiar con tu sistema operativo
> si tienes docker instalado en tu sistema puedes usar el composer desarrollado en este proyecto para correr la base de datos


[Enlace a un tutorial](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

> Esta version fue la utilizada para el desarrollo de la aplicación por lo que es recomendable instalarla para evitar cualquier problema con el funcionamiento de la misma

### Instalar el gestor de paquetes
[pnpm](https://pnpm.io/installation)

> Puedes usar npm o yaml, en dado caso borra el archivo pnpm-lock.yaml antes de proceder

## Correr el ambiente de desarrollo

Esto envuelve hacer dos cosas;
- Primero se tiene que configurar la base de datos, se esta utilizando [Prisma](https://www.prisma.io/docs) para eso por lo que solo se tiene que correr un comando para realizar la migración o configuración
- Segundo correr el ambiente de desarrollo

```sh
npx prisma migration <tag>
pnpm dev
```
> <tag> sirve para indicar la migración actual

## hacer build del proyecto

con el comando pnpm dev corriendo corre los siguientes comandos de forma secuencial

```sh
pnpm build
pnpm start
```



