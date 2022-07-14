class ListNode {
    constructor(data, next = null) {
        (this.data = data), (this.next = next);
    }
}

class LinkedList {
    constructor(node) {
        this.head = node;
    }

    // Using Tortoise and the Hare (Floyd’s Algorithm)
    //find middle node. In case of even number of nodes print second middle node.

    searchmiddle() {
        if (this.head !== null) {
            let pos1 = this.head;
            let pos2 = pos1;
            while (pos1 !== null && pos1.next !== null) {
                pos1 = pos1.next.next;
                pos2 = pos2.next;
            }

            return pos2.data;
        }
    }
}

//find middle node. In case of even number of nodes print second middle node.

//     searchmiddle() {
//         if (this.head !== null) {
//             let current = this.head;
//             let count = 0;
//             while (current !== null) {
//                 count += 1;
//                 current = current.next;
//             }
//             current = this.head;
//             count = Math.floor(count / 2) + 1;

//             while (count !== 1) {
//                 current = current.next;
//                 count -= 1;
//             }
//             return current.data;
//         }
//     }
// }

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

const searching = list.searchmiddle();
console.log(searching);
