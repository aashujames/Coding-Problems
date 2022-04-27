// You are given a binary string S of length N. 
//Your task is to check if there exists a substring of S which is the binary representation of a prime number.
//Print "Yes" if such a substring exists, and "No" if it doesn't.

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
    let S = readLine();   //S be the binary string input
    const n = S.length
    if (S == 1 || S == 0) {
        console.log('No')
    }

    //2 and 3 in binary are 10 and 11 which is contained in all binary strings of length more than 2
    else {
      console.log('Yes')
    }
    
  }
}
