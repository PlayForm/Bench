// @ts-ignore
import { dirname, resolve } from "path";
import Piscina from "piscina";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const calculation = new Piscina({
	filename: resolve(`${dirname(__filename)}/../../dist/test/calculation.js`),
	// rome-ignore lint/nursery/noPrecisionLoss:
	concurrentTasksPerWorker: 10.0,
});

const functionCall = new Piscina({
	filename: resolve(
		`${dirname(__filename)}/../../dist/test/function-call.js`
	),
	// rome-ignore lint/nursery/noPrecisionLoss:
	concurrentTasksPerWorker: 10.0,
});

await Promise.all([
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
	calculation.run({}),
	functionCall.run({}),
]);
