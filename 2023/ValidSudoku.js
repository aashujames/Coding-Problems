var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let obj = {};
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (!obj[board[i][j]]) {
                    obj[board[i][j]] = 1;
                } else {
                    return false;
                }
                // console.log(obj)
            }
        }
    }
    for (let j = 0; j < 9; j++) {
        let obj = {};
        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== ".") {
                if (!obj[board[i][j]]) {
                    obj[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    let temp1 = 0;
    let temp2 = 0;
    let obj = {};
    for (let i = temp1; i < temp1 + 3; i++) {
        for (let j = temp2; j < temp2 + 3; j++) {
            console.log(i, j);
            if (board[i][j] !== ".") {
                if (!obj[board[i][j]]) {
                    obj[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
        }
        if (i === temp1 + 2 && temp2 < 6) {
            i -= 3;
            temp2 += 3;
            obj = {};
        } else if (i === 8 && temp2 === 6) {
            break;
        } else if (i === temp1 + 2 && temp2 === 6) {
            temp1 += 3;
            temp2 = 0;
            obj = {};
        }
    }
    return true;
};

console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", "6", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "5", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ])
);
