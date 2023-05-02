var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }
    var fake = new ListNode(0);
    fake.next = head;
    var curr = fake;
    while (curr.next != null) {
        if (curr.next.val == val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return fake.next;
};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6));
