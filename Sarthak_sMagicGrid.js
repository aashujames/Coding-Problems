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

    const positiveInt = 1

    for(let i=1; i<=N; i++) {
        var str = ""
        for(let j=1; j<=N; j++) {
            str += positiveInt +" ";
            
        }
        console.log(str)
    }
  }
}
