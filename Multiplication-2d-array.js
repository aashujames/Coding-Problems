class Solution {
    multiplymatrix(A, B) {
        let AB = [];

        if (A[0].length === B.length) {
            for (let i = 0; i < A.length; i++) {
                AB.push([]);
                let count = 0;
                let k = 0;
                let eleAB = 0;
                while (count < B[0].length) {
                    for (let j = 0; j < A[0].length; j++) {
                        let eleA = A[i][j];
                        let eleB = B[j][k];
                        eleAB += eleA * eleB;
                    }
                    AB[i].push(eleAB);

                    count++;
                    k++;
                    eleAB = 0;
                }
            }
            return AB;
        } else {
            return "Cannot be multiplied, Check condition!!";
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
        [0, 1],
        [3, 0]
    ]
);
console.log(ans);
