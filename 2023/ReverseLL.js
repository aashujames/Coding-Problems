var reverseList = function (head) {
    let p1 = null;
    while (head) {
        let p2 = head.next;
        head.next = p1;
        p1 = head;
        head = p2;
    }
    return p1;
};

console.log(reverseList([1, 2, 3, 4, 5]));

// leetcode
