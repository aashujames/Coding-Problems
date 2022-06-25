class ListNode {
    constructor(data, next = null) {
        (this.data = data), (this.next = next);
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }

    //find node with index or data
    search(data) {
        if (this.head !== null) {
            let current = this.head;
            while (current !== null) {
                if (current.data === data) {
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let node3 = new ListNode(13);
node2.next = node3;

let node4 = new ListNode(8);
node3.next = node4;

let node5 = new ListNode(50);
node4.next = node5;

let node6 = new ListNode(34);
node5.next = node6;

let list = new LinkedList(node1);

const searching = list.search(14);
console.log(searching);
