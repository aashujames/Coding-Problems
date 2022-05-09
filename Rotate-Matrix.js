class Solution {
    rotatematrix(A) {
        let B = [];

        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A.length; j++) {
                if (i === 0) {
                    B.unshift([]);
                    B[i].push(A[i][j]);
                } else {
                    B[A.length - 1 - j].push(A[i][j]);
                }
            }
        }
        return B;
    }
}

const rotatematrix = new Solution();
const ans = rotatematrix.rotatematrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);
console.log(ans);
