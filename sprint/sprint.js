console.log("Welcome to my Sprint\n");

const code = prompt("Enter your series: ").split(" ").map((element) => +element );

const subtract = (loc) => {
  const locOfSubtractWith = code[loc + 1]; //code[3]
  const locOfSubtractTo = code[loc + 2]; //code[4]
  const locOfResult = code[loc + 3]; //code[2]

  code[locOfResult] = code[locOfSubtractWith] - code[locOfSubtractTo];
  return loc + 4;
};

const add = (loc) => {
  const locOfAddWith = code[loc + 1]; //code[3]
  const locOfAddTo = code[loc + 2]; //code[4]
  const locOfResult = code[loc + 3]; //code[2]

  code[locOfResult] = code[locOfAddWith] + code[locOfAddTo] ;
  return loc + 4;
};

const jump = (loc) => {
  return loc + 1;
}

const jumIfEqual = (loc) => {
  const nextLoc = code[loc + 1];
  const nextToNextLoc = code[loc + 2];

  if (code[nextLoc] === code[nextToNextLoc]) {
    return loc + 3;
  }

  return loc + 4;
}

const instructions = {
  1: add,
  2: subtract,
  3: jump,
  4: jumIfEqual,
  // 5: jumpIfLessThan,
  // 7: copy,
};

const instruction = code[1];
let location = 1;

const executeInstruction = (instruction) => {
  while (instruction !== 9) {
    // if (instruction in instructions) {
    location = instructions[instruction](location);
    instruction = code[location];
    // }
  }
};

executeInstruction(instruction);

console.log(code);