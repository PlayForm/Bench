# parallel-piscina-benchmark

## Parallel

| Command                       |       Mean [s] | Min [s] | Max [s] | Relative |
| :---------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel.js` | 12.208 ± 0.119 |  12.124 |  12.292 |     1.00 |

## Piscina

| Command                      |       Mean [s] | Min [s] | Max [s] | Relative |
| :--------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina.js` | 12.224 ± 0.276 |  12.029 |  12.419 |     1.00 |

## Serial

| Command                     |       Mean [s] | Min [s] | Max [s] | Relative |
| :-------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial.js` | 12.648 ± 0.093 |  12.582 |  12.715 |     1.00 |

## Parallel No Await

| Command                                |       Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel-no-await.js` | 12.210 ± 0.144 |  12.108 |  12.312 |     1.00 |

## Piscina No Await

| Command                               |      Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------ | ------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina-no-await.js` | 8.905 ± 0.479 |   8.566 |   9.244 |     1.00 |

## Serial No Await

| Command                              |       Mean [s] | Min [s] | Max [s] | Relative |
| :----------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial-no-await.js` | 12.239 ± 0.066 |  12.192 |  12.285 |     1.00 |
