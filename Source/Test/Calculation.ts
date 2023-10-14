export default async () => {
	const Count = 1000000000;
	let Index = 0;

	while (Index < Count) {
		Index++;
	}

	console.info(
		`All is well. ${
			(
				await (
					await import("fs/promises")
				).readFile("./Target/test/calculation.js")
			).byteLength
		} bytes`
	);

	return true;
};
