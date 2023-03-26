var generate = function (numRows) {
    let PasTriangle = [];

    PasTriangle.push([1]);
    if (numRows > 1) {
        PasTriangle.push([1, 1]);
        if (numRows > 2) {
            for (let cycle = 1; cycle <= numRows - 2; cycle++) {
                let nextrowArr = [];
                let prevrowArr = PasTriangle[PasTriangle.length - 1];
                for (let i = 1; i <= prevrowArr.length + 1; i++) {
                    let item = 0;
                    if (i === 1 || i === prevrowArr.length + 1) {
                        nextrowArr.push(1);
                    } else {
                        let j = 0;
                        j = i - 2;
                        item = prevrowArr[j] + prevrowArr[j + 1];
                        nextrowArr.push(item);
                    }
                }
                PasTriangle.push(nextrowArr);
            }
        }
    }
    console.log(PasTriangle);
    return PasTriangle;
};

generate(3);
