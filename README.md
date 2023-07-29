# parallel-piscina-benchmark

## Parallel

| Command                       |       Mean [s] | Min [s] | Max [s] | Relative |
| :---------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel.js` | 14.047 ± 0.013 |  14.038 |  14.056 |     1.00 |

## Piscina

| Command                      |       Mean [s] | Min [s] | Max [s] | Relative |
| :--------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina.js` | 13.865 ± 0.071 |  13.815 |  13.916 |     1.00 |

## Serial

| Command                     |       Mean [s] | Min [s] | Max [s] | Relative |
| :-------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial.js` | 14.029 ± 0.225 |  13.870 |  14.188 |     1.00 |

## Parallel No Await

| Command                                |       Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel-no-await.js` | 13.872 ± 0.162 |  13.758 |  13.987 |     1.00 |

## Piscina No Await

| Command                               |      Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------ | ------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina-no-await.js` | 9.638 ± 0.647 |   9.180 |  10.096 |     1.00 |

## Serial No Await

| Command                              |       Mean [s] | Min [s] | Max [s] | Relative |
| :----------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial-no-await.js` | 13.540 ± 0.105 |  13.466 |  13.615 |     1.00 |
