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
    let N = parseInt(readLine());
    let first = 0.143*N
    let x = Math.pow(first, N)
    
    let result = x - Math.floor(x)
    
    if(result < 0.5) {
      console.log(Math.floor(x))
    }
    else {
      console.log(`${Math.floor(x)+1}`)
    }
    
  }
}
