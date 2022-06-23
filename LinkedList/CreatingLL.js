class ListNode {
    constructor(data, next = null) {
        (this.data = data), (this.next = next);
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data);
