var firstUniqChar = function (s) {
    let obj = {};
    for (let i of s) {
        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i] += 1;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            for (let j of s) {
                if (key === j) {
                    return s.indexOf(j);
                }
            }
        }
    }
    return -1;
};

console.log(firstUniqChar("leeb"));
