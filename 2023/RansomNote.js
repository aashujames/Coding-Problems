var canConstruct = function (ransomNote, magazine) {
    let objrN = {},
        objm = {};
    for (let i of ransomNote) {
        if (!objrN[i]) {
            objrN[i] = 1;
        } else {
            objrN[i] += 1;
        }
    }
    for (let j of magazine) {
        if (!objm[j]) {
            objm[j] = 1;
        } else {
            objm[j] += 1;
        }
    }
    for (let key1 in objrN) {
        if (objm[key1]) {
            if (objrN[key1] <= objm[key1]) {
                continue;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct(ajj, jabja));
