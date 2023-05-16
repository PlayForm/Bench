# parallel-piscina-benchmark

## Parallel

| Command                       |       Mean [s] | Min [s] | Max [s] | Relative |
| :---------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel.js` | 13.151 ± 0.043 |  13.120 |  13.181 |     1.00 |

## Piscina

| Command                      |       Mean [s] | Min [s] | Max [s] | Relative |
| :--------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina.js` | 13.321 ± 0.165 |  13.204 |  13.437 |     1.00 |

## Serial

| Command                     |       Mean [s] | Min [s] | Max [s] | Relative |
| :-------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial.js` | 13.084 ± 0.008 |  13.078 |  13.090 |     1.00 |

## Parallel No Await

| Command                                |       Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel-no-await.js` | 13.096 ± 0.090 |  13.032 |  13.160 |     1.00 |

## Piscina No Await

| Command                               |      Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------ | ------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina-no-await.js` | 9.298 ± 0.614 |   8.864 |   9.732 |     1.00 |

## Serial No Await

| Command                              |       Mean [s] | Min [s] | Max [s] | Relative |
| :----------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial-no-await.js` | 13.123 ± 0.046 |  13.091 |  13.155 |     1.00 |
