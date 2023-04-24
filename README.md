# parallel-piscina-benchmark

## Parallel
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel.js` | 12.926 ± 0.223 | 12.768 | 13.084 | 1.00 |

## Piscina
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina.js` | 13.444 ± 0.373 | 13.180 | 13.708 | 1.00 |

## Serial
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial.js` | 12.763 ± 0.131 | 12.671 | 12.856 | 1.00 |

## Parallel No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/parallel-no-await.js` | 13.121 ± 0.025 | 13.104 | 13.139 | 1.00 |

## Piscina No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/piscina-no-await.js` | 7.778 ± 0.044 | 7.748 | 7.809 | 1.00 |

## Serial No Await
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node ./dist/lib/serial-no-await.js` | 12.496 ± 0.253 | 12.317 | 12.675 | 1.00 |
