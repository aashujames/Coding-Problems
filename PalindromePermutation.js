class Solution {
    palindromepermut(string) {
        let obj = {};
        for (const i of string) {
            if (!obj[i]) {
                obj[i] = 1;
            } else {
                obj[i] += 1;
            }
        }

        let count = 0;
        for (let key in obj) {
            if (obj[key] % 2 === 1) {
                count += 1;
                if (key === " ") {
                    count -= 1;
                }

                if (count > 1) {
                    return false;
                }
            }
        }

        return true;
    }
}

const palindromepermut = new Solution();
const ans = palindromepermut.palindromepermut("lleoe ");
console.log(ans);
