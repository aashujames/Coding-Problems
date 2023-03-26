process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here

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
        let N = readLine().split(" ");
        let A = parseInt(N[0]),
            B = parseInt(N[1]),
            C = parseInt(N[2]);
        let arr = [];
        for (let j = A; j <= B; j++) {
            arr.push(j);
        }
        if (C === 1) {
            console.log("YES");
        }
        for (let k = 0; k < arr.length - 1; k++) {
            for (let l = k + 1; l < arr.length; l++) {
                let x = arr[k],
                    y = arr[l];
                for (var divisor = 2; divisor <= arr[k]; divisor++) {
                    if (x % divisor === 0 && y % divisor === 0) {
                        if (divisor === C) {
                            console.log("YES");
                            break;
                        } else {
                            x = x / divisor;
                            y = y / divisor;
                        }
                    }
                }

                console.log("NO", x, y);    
            }
        }
    }
}
