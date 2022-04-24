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

    let n = parseInt(K/2)
    
    if(n === 1 || K ===1) {
      console.log(1)
    }
    else {
      let A = [n]
      for (let i = 0; n>1; i++) {
        n = parseInt(n/2)
        A.push(n)
      }
      let S = []
      let x = 0
      for (let j = 0; j < A.length; j++) {
        x += A[j]
        S.push(x)
      }
      

      let maxsequence = 0
      for (y=0; y< A.length; y++) {
      if (A[y]+S[y] === K) {
        maxsequence += 1
      }
      
    }
    console.log(maxsequence)
    }

    
  }
}
