# parallel-piscina-benchmark

## Parallel
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel.js` | 11.457 ± 0.002 | 11.456 | 11.459 | 1.00 |

## Piscina
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina.js` | 11.672 ± 0.003 | 11.670 | 11.674 | 1.00 |

## Serial
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial.js` | 11.454 ± 0.004 | 11.452 | 11.457 | 1.00 |

## Parallel No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel-no-await.js` | 11.446 ± 0.002 | 11.445 | 11.447 | 1.00 |

## Piscina No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina-no-await.js` | 7.570 ± 0.012 | 7.562 | 7.579 | 1.00 |

## Serial No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial-no-await.js` | 11.448 ± 0.000 | 11.448 | 11.448 | 1.00 |
