class ListNode {
    constructor(data, next = null) {
        (this.data = data), (this.next = next);
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }

    //iterate Linked list

    iterate() {
        //first check if head is null
        if (this.head !== null) {
            let current = this.head;
            while (current !== null) {
                console.log(current.data);
                current = current.next;
            }
        }
    }

    //insert a node
    insert(data) {
        //insert at end
        if (this.head !== null) {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            let newone = new ListNode(data);
            current.next = newone;
            console.log(current);
        }
    }

    //insert at beginning
    //find node with index or data
    //find middle node
    //delete a node
    //reverse the linked list in place
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

list.insert(21);
list.iterate();
