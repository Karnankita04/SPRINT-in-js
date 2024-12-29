const instruction = { 1: add, 2: subtract, 3: jump, 4: jumIfEqual, 5: jumpIfLessThan, 7: copy };

const code = prompt("Enter your series: ").split(" ");




const add = (loc1, loc2, loc3) => {

}

const getInput = () => {
  console.log("Welcome to my Sprint\n");

  let index = 0;

};

const executeInstruction = (instruction) => {
  while (instruction !== 9) {
    const arr = code.split(" ").map((number) => +number);
    console.log(instruction);
    console.log(arr);
  
    if (instruction === 3) {
    }
    index++;
    instruction = arr[index];
  }

}