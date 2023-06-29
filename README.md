# parallel-piscina-benchmark

## Parallel
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel.js` | 12.519 ± 0.001 | 12.519 | 12.520 | 1.00 |

## Piscina
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina.js` | 12.714 ± 0.002 | 12.712 | 12.716 | 1.00 |

## Serial
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial.js` | 12.515 ± 0.001 | 12.514 | 12.516 | 1.00 |

## Parallel No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel-no-await.js` | 12.507 ± 0.000 | 12.507 | 12.507 | 1.00 |

## Piscina No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina-no-await.js` | 7.213 ± 0.047 | 7.180 | 7.247 | 1.00 |

## Serial No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial-no-await.js` | 12.506 ± 0.000 | 12.506 | 12.507 | 1.00 |
