# Rick and Morty API challenge

Obtiene data de la [API de Rick and Morty](https://rickandmortyapi.com/) y resuelve los siguientes desafios

1. Char counter
   - Cuantas veces aparece la letra 'i' case insensitive en los nombres de todas las **location**
   - Cuantas veces aparece la letra 'e' case insensitive en los nombres de todas las **episode**
   - Cuantas veces aparece la letra 'c' case insensitive en los nombres de todas las **character**
2. Episode locations
   - Para cada episode, indicar la cantidad y un listado con las **location** (**origin**) de todos los **character** que aparecieron es ese **episode** (sin repetir)
3. Metrics
   - Cuanto tiempo tardo en correr cada programa en total (desde ejecución hasta entrega de resultados)

## Dependence free

1. Para probar el programa solo hace falta correr un **npm run dev** en la consola
2. El resultado se vera en el archivo **results.json** en el directorio principal

> Las únicas dependencias instaladas son para linter y testing *(Eslint y Jest)* 

## Results 

```json
[
  {
    "exercise_name": "Char counter",
    "time": "1s 622ms",
    "in_time": true,
    "results": [
      {
        "char": "l",
        "count": 82,
        "resource": "location"
      },
      {
        "char": "e",
        "count": 88,
        "resource": "episode"
      },
      {
        "char": "c",
        "count": 494,
        "resource": "character"
      }
    ]
  },
  {
    "exercise_name": "Episode Locations",
    "time": "1s 499ms",
    "in_time": true,
    "results": [
      {
        "name": "Pilot",
        "episode": "S01E01",
        "locations": [
          "Earth (C-137)",
          "unknown",
          "Bepis 9",
          "Gromflom Prime",
          "Girvonesk"
        ]
      },
       {
        "name": "Lawnmower Dog",
        "episode": "S01E02",
        "locations": [
          "Earth (C-137)",
          "unknown",
          "Earth (Replacement Dimension)",
          "Mr. Goldenfold's dream",
          "Snuffles' Dream"
        ]
      },
      {
        "name": "Anatomy Park",
        "episode": "S01E03",
        "locations": [
          "Earth (C-137)",
          "unknown",
          "Anatomy Park"
        ]
      },
      {
        "name": "M. Night Shaym-Aliens!",
        "episode": "S01E04",
        "locations": [
          "Earth (C-137)",
          "unknown"
        ]
      },
      {
        "name": "Meeseeks and Destroy",
        "episode": "S01E05",
        "locations": [
          "Earth (C-137)",
          "unknown",
          "Fantasy World",
          "Giant's Town",
          "Mr. Meeseeks Box"
        ]
      },
      ........
      ]
```
