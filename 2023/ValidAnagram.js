var isAnagram = function (s, t) {
    let obj1 = {},
        obj2 = {};
    for (let i of s) {
        if (!obj1[i]) {
            obj1[i] = 1;
        } else {
            obj1[i] += 1;
        }
    }
    for (let j of t) {
        if (!obj2[j]) {
            obj2[j] = 1;
        } else {
            obj2[j] += 1;
        }
    }
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let key in obj2) {
            if (obj1[key]) {
                if (obj2[key] === obj1[key]) {
                    continue;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};
