import * as fs from "fs";

export default async () => {

	const count = 1000000000;
	let i = 0;

	while (i < count) {
		i++;
	}

	console.info(
		`All is well. ${
			(await fs.promises.readFile("./dist/test/calculation.js"))
				.byteLength
		} bytes`
	);

	return true;
};
