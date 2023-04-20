# parallel-piscina-benchmark

## Parallel
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel.js` | 12.511 ± 0.001 | 12.511 | 12.512 | 1.00 |

## Piscina
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina.js` | 12.710 ± 0.013 | 12.701 | 12.720 | 1.00 |

## Serial
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial.js` | 12.514 ± 0.005 | 12.511 | 12.517 | 1.00 |

## Parallel No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel-no-await.js` | 12.503 ± 0.000 | 12.503 | 12.503 | 1.00 |

## Piscina No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina-no-await.js` | 7.384 ± 0.356 | 7.132 | 7.635 | 1.00 |

## Serial No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial-no-await.js` | 12.514 ± 0.010 | 12.507 | 12.520 | 1.00 |
