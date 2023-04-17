# parallel-piscina-benchmark

## Parallel
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel.js` | 12.528 ± 0.011 | 12.521 | 12.536 | 1.00 |

## Piscina
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina.js` | 12.712 ± 0.007 | 12.707 | 12.717 | 1.00 |

## Serial
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial.js` | 12.514 ± 0.002 | 12.513 | 12.516 | 1.00 |

## Parallel No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel-no-await.js` | 12.508 ± 0.002 | 12.506 | 12.510 | 1.00 |

## Piscina No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina-no-await.js` | 7.259 ± 0.245 | 7.086 | 7.432 | 1.00 |

## Serial No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial-no-await.js` | 12.523 ± 0.021 | 12.508 | 12.538 | 1.00 |
