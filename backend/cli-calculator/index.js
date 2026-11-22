const operation = String(process.argv[2]).trim().toLowerCase();
if (process.argv[2] === undefined) {
	console.log("ERROR: MISSING OPERATION");
	process.exit(1);
}

if (process.argv[2].trim() === "") {
	console.log("ERROR: EMTPY OPERATION");
	process.exit(1);
}

if (process.argv[3] === undefined) {
	console.log("ERROR: MISSING FIRST ARGUMENT");
	process.exit(1);
}

if (process.argv[4] === undefined) {
	console.log("ERROR: MISSING SECOND ARGUMENT");
	process.exit(1);
}

if (process.argv[3].trim() === "") {
	console.log("ERROR: EMPTY FIRST ARGUMENT");
	process.exit(1);
}

if (process.argv[4].trim() === "") {
	console.log("ERROR: EMPTY SECOND ARGUMENT");
	process.exit(1);
}

const first_number = Number(process.argv[3]);
const second_number = Number(process.argv[4]);

if (!Number.isFinite(first_number)) {
	console.log("ERROR: INVALID FIRST ARGUMENT");
	process.exit(1);
}

if (!Number.isFinite(second_number)) {
	console.log("ERROR: INVALID SECOND ARGUMENT");
	process.exit(1);
}

if (operation === "add") {
	const result = first_number + second_number;
	console.log(`Result: ${result}`);
} else if (operation === "subtract") {
	const result = first_number - second_number;
	console.log(`Result:  ${result}`);
} else if (operation === "multiply") {
	const result = first_number * second_number;
	console.log(`Result: ${result}`);
} else if (operation === "divide") {
	if (second_number === 0) {
		console.log("ERROR: CANNOT DIVIDE BY ZERO");
		process.exit(1);
	} else {
		const result = first_number / second_number;
		console.log(`Result: ${result}`);
	}
} else {
	console.log("Unsupported operation");
	process.exit(1);
}
