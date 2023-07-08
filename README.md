# parallel-piscina-benchmark

## Parallel

| Command                       |       Mean [s] | Min [s] | Max [s] | Relative |
| :---------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel.js` | 11.705 ± 0.078 |  11.650 |  11.760 |     1.00 |

## Piscina

| Command                      |       Mean [s] | Min [s] | Max [s] | Relative |
| :--------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina.js` | 13.024 ± 0.199 |  12.883 |  13.164 |     1.00 |

## Serial

| Command                     |       Mean [s] | Min [s] | Max [s] | Relative |
| :-------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial.js` | 11.916 ± 0.069 |  11.866 |  11.965 |     1.00 |

## Parallel No Await

| Command                                |       Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel-no-await.js` | 11.846 ± 0.421 |  11.549 |  12.144 |     1.00 |

## Piscina No Await

| Command                               |      Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------ | ------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina-no-await.js` | 7.378 ± 0.137 |   7.281 |   7.474 |     1.00 |

## Serial No Await

| Command                              |       Mean [s] | Min [s] | Max [s] | Relative |
| :----------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial-no-await.js` | 11.902 ± 0.049 |  11.867 |  11.936 |     1.00 |
