import { dirname as Dir, resolve as Resolve } from "path";
import Piscina from "piscina";
import { fileURLToPath as Path } from "url";
const NameFile = Path(import.meta.url);

const calculation = new Piscina({
	filename: Resolve(`${Dir(NameFile)}/../../Target/test/calculation.js`),
});

const functionCall = new Piscina({
	filename: Resolve(`${Dir(NameFile)}/../../Target/test/function-call.js`),
});

await Promise.all([
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
	await calculation.run({}),
	await functionCall.run({}),
]);
