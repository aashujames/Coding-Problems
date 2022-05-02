//for m*n matrix
class Solution {
    arraydeclare(arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                sum += arr[i][j];
            }
        }

        return sum;
    }
}

const arraydeclare = new Solution();
const ans = arraydeclare.arraydeclare([
    [1, 2, 3],
    [4, 5, 1],
    [0, 1, 2]
]);
console.log(ans);
