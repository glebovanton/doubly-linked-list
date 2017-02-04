const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0
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
    }

    isEmpty() {
        if (this.length==0){
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
        this.length--
        return this;
    }

    deleteAt(index) {
    }

    reverse() {
    }

    indexOf(data) {
        var cur = this._head;
        var count = 0;

        while (cur.data) {
            if (cur.data == data) {
                return count;
                break
            }
            cur = cur.next;
            if (!cur) return -1;
            count++;
        }
    }
}

module.exports = LinkedList;
