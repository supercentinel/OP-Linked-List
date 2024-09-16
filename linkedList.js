class ll_node {
    data = null;
    nextNode = null;

    constructor(value) {
        this.data = value;
    }
}

class LinkedList {
    head;
    tail;
    size;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(node) {
        //if the list is empty
        if(this.size == 0) {
            this.head = node;
            this.tail = node;
            this.head.nextNode = null;
            this.tail.nextNode = null;
            this.size++;
            return node;
        }
        //if the list only have a head/tail
        if(this.size == 1) {
            this.tail = node;
            this.head.nextNode = this.tail;
            this.tail.nextNode = null;
            this.size++;
            return node;
        }

        this.tail.nextNode = node;
        this.tail = node;
        this.tail.nextNode = null;

        this.size++;
        return node;
    }

    prepend(node) {
        let temp = this.head;
        this.head = node;

        this.head.nextNode = temp;
        this.size++;
        return this.head;
    }

    getHead() {
        return this.head;
    }

    at(n) {
        if (n < 1) {
            return new ll_node();
        }
        if(n > this.size) {
            return new ll_node();
        }

        let node = this.head;

        for(let i = 0; i < n - 1; i++) {
            node = node.nextNode;
        }

        return node;
    }

    getTail() {
        return this.tail;
    }

    pop() {
        let node;
        let popped = this.tail;

        if(this.size < 1) {
            return new ll_node();
        }

        node = this.at(this.size - 1);

        this.tail = node;
        this.tail.nextNode = null;
        this.size--;

        return popped;
    }

    contains(value) {
        let node = this.head;

        for(let i = 0; i < this.size; i++) {
            if(node.data == value) {
                return true;
            }
            node = node.nextNode;
        }

        return false;
    }

    find(value) {
        let node = this.head;

        for(let i = 0; i < this.size; i++) {
            if(node.data == value) {
                return i+1;
            }
            node = node.nextNode;
        }

        return null;
    }

    insertAt(node, n) {
        //in case the n is out of ll bound
        if(n > this.size) {
            return new ll_node();
        }

        if(n == 1) {
            return this.prepend(node);
        }

        if(n == this.size) {
            return this.append(node)
        }

        let prev = this.at(n);

        node.nextNode = prev.nextNode;
        prev.nextNode = node;

        this.size++;

        return node;
    }

    removeAt(n) {
        let removed;
        //in case the n is out of ll bound
        if(n > this.size) {
            return new ll_node();
        }

        if(n == 1) {
            removed = this.head;
            this.head = this.at(2);

            this.size--;
            return removed;
        }

        if(n == this.size) {
            return this.pop();
        }

        removed = this.at(n);
        let prev = this.at(n-1);

        prev.nextNode = removed.nextNode;
        this.size--;

        return removed;
    }

    toString() {
        let s = '';
        let node;

        node = this.head;

        for(let i = 0; i < this.size; i++) {
            s += '[' + node.data + ']' + ' -> '
            node = node.nextNode;
        }

        s += ' null';

        return s;
    }
}

let ll = new LinkedList();

for(let i = 6; i < 12; i++) {
    let node = new ll_node(i);
    ll.append(node);
}
ll.append(new ll_node(8));
ll.pop();
// console.log(ll.find(8));
// console.log(ll.contains(11));
// console.log(ll.prepend(new ll_node(14)));
ll.insertAt(new ll_node(12), 2);
console.log(ll.toString());

