//Floyd's Tortoise and Hare Algorithm
var hasCycle = function (head) {
    let fast = head,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};

console.log(hasCycle([3, 4, 1, 8], 0));

// leetcode
