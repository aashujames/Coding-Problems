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
    let i = readLine().split(' ');    //inputs with space separated
    const N = i[0], D = i[1]   //N = number of population in ChefLand and D= day for which you need to find the number of infected people

    if (D <= 10) {
      let uptoTen = Math.pow(2, D)   // 0 to 10 days doubling of disease each day
      if (uptoTen < N) {
        console.log(uptoTen)
      }
      else {
        console.log(N)
      }
    }

    else {
      let elevenOnwrd = Math.pow(2, 10) * Math.pow(3, D-10)   //11th day onwards the disease triples each day
      if (elevenOnwrd < N) {
        console.log(elevenOnwrd)
      }
      else {
        console.log(N)
      }
    }
    
    
  }
}