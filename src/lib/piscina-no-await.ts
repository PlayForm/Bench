// @ts-ignore
import Piscina from "piscina";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const calculation = new Piscina({
	filename: resolve(`${dirname(__filename)}/../../dist/test/calculation.js`),
	maxQueue: "auto",
	concurrentTasksPerWorker: 5,
});

const functionCall = new Piscina({
	filename: resolve(
		`${dirname(__filename)}/../../dist/test/function-call.js`
	),
	maxQueue: "auto",
	concurrentTasksPerWorker: 5,
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
