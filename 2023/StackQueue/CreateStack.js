class Stack {
    top = -1;
    arr = [];
    constructor(capacity) {
        this.top = top;
        this.arr = [capacity];
        this.capacity = capacity;
    }
    push(data) {
        if (top === capacity - 1) {
            console.log("Overflow");
        }
        top++;
        arr[top] = data;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(arr);
