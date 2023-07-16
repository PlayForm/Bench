import { readFile } from "fs/promises";

export default async () => {
	const count = 1000000000;
	let i = 0;

	while (i < count) {
		i++;
	}

	console.info(
		`All is well. ${
			(await readFile("./dist/test/calculation.js")).byteLength
		} bytes`
	);

	return true;
};
