# parallel-piscina-benchmark

## Parallel

| Command                       |       Mean [s] | Min [s] | Max [s] | Relative |
| :---------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel.js` | 12.528 ± 0.000 |  12.528 |  12.529 |     1.00 |

## Piscina

| Command                      |       Mean [s] | Min [s] | Max [s] | Relative |
| :--------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina.js` | 12.742 ± 0.001 |  12.741 |  12.743 |     1.00 |

## Serial

| Command                     |       Mean [s] | Min [s] | Max [s] | Relative |
| :-------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial.js` | 12.527 ± 0.000 |  12.527 |  12.527 |     1.00 |

## Parallel No Await

| Command                                |       Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/parallel-no-await.js` | 12.514 ± 0.002 |  12.513 |  12.515 |     1.00 |

## Piscina No Await

| Command                               |      Mean [s] | Min [s] | Max [s] | Relative |
| :------------------------------------ | ------------: | ------: | ------: | -------: |
| `node ./dist/lib/piscina-no-await.js` | 7.165 ± 0.009 |   7.158 |   7.171 |     1.00 |

## Serial No Await

| Command                              |       Mean [s] | Min [s] | Max [s] | Relative |
| :----------------------------------- | -------------: | ------: | ------: | -------: |
| `node ./dist/lib/serial-no-await.js` | 12.517 ± 0.003 |  12.515 |  12.519 |     1.00 |
