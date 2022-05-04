class Solution {
    multiplymatrix(A, B) {
        let AB = [];

        for (let i = 0; i < A.length; i++) {
            let count = 0;
            let k = 0;
            let eleAB = 0;
            while (count < B[0].length) {
                for (let j = 0; j < A[0].length; j++) {
                    let eleA = A[i][j];

                    let eleB = B[j][k];
                    console.log(eleA);
                    console.log(eleB);
                    eleAB += eleA * eleB;

                    console.log(eleAB);
                }
                AB.push([eleAB]);
                console.log(AB);
                count++;
                k++;
                eleAB = 0;
            }
        }
    }
}

const multiplymatrix = new Solution();
const ans = multiplymatrix.multiplymatrix(
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [0, 4],
        [3, 3],
        [2, 1]
    ]
);
console.log(ans);
