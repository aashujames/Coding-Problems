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
    let n = readLine().split(' ');
    let XA = parseInt(n[0])
    let XB = parseInt(n[1])
    let XC = parseInt(n[2])

    if (XA >50 || XB >50 || XC >50) {
      if (XA > XB && XA > XC) {
        console.log('A')
      }
      else if (XB > XA && XB > XC) {
        console.log('B')
      }
      else {
        console.log('C')
      }
    }
    else {
      console.log('NOTA')
    }
  }
}
