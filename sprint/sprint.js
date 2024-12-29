console.log("Welcome to my Sprint\n");

const code = prompt("Enter your series: ")
  .split(" ")
  .map((element) => +element);

const subtract = (loc) => {
  const locOfSubtractWith = code[loc + 1];
  const locOfSubtractTo = code[loc + 2];
  const locOfResult = code[loc + 3];

  code[locOfResult] = code[locOfSubtractWith] - code[locOfSubtractTo];
  return loc + 4;
};

const add = (loc) => {
  const locOfAddWith = code[loc + 1];
  const locOfAddTo = code[loc + 2];
  const locOfResult = code[loc + 3];

  code[locOfResult] = code[locOfAddWith] + code[locOfAddTo];
  return loc + 4;
};

const jump = (loc) => {
  return loc + 1;
};

const jumpIfEqual = (loc) => {
  const nextLoc = code[loc + 1];
  const nextToNextLoc = code[loc + 2];

  if (code[nextLoc] === code[nextToNextLoc]) {
    return code[loc + 3];
  }

  return code[loc + 4];
};

const jumpIfLessThan = (loc) => {
  const nextLoc = code[loc + 1];
  const nextToNextLoc = code[loc + 2];

  if (code[nextLoc] < code[nextToNextLoc]) {
    return code[loc + 3];
  }

  return code[loc + 4];
};

const copy = (loc) => {
  const nextLoc = code[loc + 1];
  const nextToNextLoc = code[loc + 2];

  code[nextToNextLoc] = code[nextLoc];
  return loc + 3;
};

const instructions = {
  1: add,
  2: subtract,
  3: jump,
  4: jumpIfEqual,
  5: jumpIfLessThan,
  7: copy,
};

const instruction = code[1];
let location = 1;

const executeInstruction = (instruction) => {
  while (instruction !== 9) {
    if (instruction in instructions) {
      location = instructions[instruction](location);
      instruction = code[location];
    }
  }
};

executeInstruction(instruction);

console.log(code);
