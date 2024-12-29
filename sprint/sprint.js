console.log("Welcome to my Sprint\n");

const getInput = () => {
  const code = prompt("Enter your series: ")
    .split(" ")
    .map((element) => +element);
  return code;
};

const subtract = (code, loc) => {
  const locOfSubtractWith = code[loc + 1];
  const locOfSubtractTo = code[loc + 2];
  const locOfResult = code[loc + 3];

  code[locOfResult] = code[locOfSubtractWith] - code[locOfSubtractTo];
  return loc + 4;
};

const add = (code, loc) => {
  const locOfAddWith = code[loc + 1];
  const locOfAddTo = code[loc + 2];
  const locOfResult = code[loc + 3];

  code[locOfResult] = code[locOfAddWith] + code[locOfAddTo];
  return loc + 4;
};

const jump = (code, loc) => {
  return code[loc + 1];
};

const jumpIfEqual = (code, loc) => {
  const nextLoc = code[loc + 1];
  const nextToNextLoc = code[loc + 2];

  if (code[nextLoc] === code[nextToNextLoc]) {
    return code[loc + 3];
  }

  return loc + 4;
};

const jumpIfLessThan = (code, loc) => {
  const nextLoc = code[loc + 1];
  const nextToNextLoc = code[loc + 2];

  if (code[nextLoc] < code[nextToNextLoc]) {
    return code[loc + 3];
  }

  return loc + 4;
};

const copy = (code, loc) => {
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

const executeInstruction = () => {
  const code = getInput();
  let location = 1;
  let instruction = code[location];

  while (instruction !== 9) {
    if (instruction in instructions) {
      location = instructions[instruction](code, location);
      instruction = code[location];
    } else {
      return "Invalid Instruction";
    }
  }

  return code;
};

console.log(executeInstruction());