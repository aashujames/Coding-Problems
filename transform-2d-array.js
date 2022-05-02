//for m*n matrix
class Solution {
    transformmatrix(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (j > i) {
                    let temp = arr[i][j];
                    arr[i][j] = arr[j][i];
                    console.log(arr[j][i]);
                    arr[j][i] = temp;
                }
            }
        }

        return arr;
    }
}

const transformmatrix = new Solution();
const ans = transformmatrix.transformmatrix([
    [1, 2, 3, 0],
    [4, 5, 6, 7],
    [3, 6, 8, 3],
    [6, 3, 9, 1]
]);
console.log(ans);
