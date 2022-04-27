process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine()); // T Test Cases
  let i = 0;
  for (; i < t; i++) {
    let K = parseInt(readLine());

    let rem = 52 % K;

    // if(rem === 0) {
    //   console.log(rem)
    // }
    // else {
    //   console.log(rem)
    // }
    console.log(rem)
  }
}
