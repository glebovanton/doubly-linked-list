const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var cur = this._head;
        var count = 0;

        while (count < index) {
            cur = cur.next;
            count++;
        }
        return cur.data;
    }

    insertAt(index, data) {
        var cur = this._tail;
        while (index < this.length-1){
            cur = cur.prev;
            index++;
        }
        cur.data = data;
        return this;
    }

    isEmpty() {
        if (!this.length){
            return true
        }
        else {
            return false
        }
    }

    clear() {
        if (this.isEmpty()) return this;
        var cur = this._head;

        while (cur.next) {
            cur.data = null;
            cur = cur.next;
            this.length--;
        }

        this._tail.data = null;
        this.length--;
        return this;
    }

    deleteAt(index) {
        var cur = this._head,
            prevNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null,
            count = 0;

        // use case for single element in list
        if (this.length == 1) {
            return this.clear();
        }

        // use case for _head node deletion
        if (index == 0) {
            this._head = cur.next;
            this._head.prev = null;
            cur = null;
            this.length--;
            return this
        }

        // usual node deletion
        while (count < index) {
            prevNodeToDelete = cur;
            nodeToDelete = cur.next;
            cur = cur.next;
            count++;
        }

        prevNodeToDelete.next = nodeToDelete.next;
        nodeToDelete.next.prev = prevNodeToDelete;
        nodeToDelete = null;
        this.length--;
        return this
    }

    reverse() {
        var listVal = [];
        for(var i = 0; i<this.length; i++){
            listVal.push(this.at(i));
        }
        var listRevVal = listVal.reverse();

        for(i = 0; i < listRevVal.length; i++){
            this.insertAt(i,listRevVal[i]);
        }
        return this;
    }

    indexOf(data) {
        var cur = this._head;
        var count = 0;

        while (cur.data) {
            if (cur.data == data) {
                return count;

            }
            cur = cur.next;
            if (!cur) return -1;
            count++;
        }
    }
}

module.exports = LinkedList;
