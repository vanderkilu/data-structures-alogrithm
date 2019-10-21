function Queue() {
    this.datastore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.rear = rear
    this.isEmpty = isEmpty
    this.dequeueWithPriority = dequeueWithPriority
}

function enqueue(item) {
    this.datastore.push(item)
}

function dequeue() {
    return this.datastore.shift()
}

function front() {
    return this.datastore[0]
}

function rear() {
    return this.datastore[this.datastore.length -1]
}

function isEmpty() {
    return this.datastore.length < 1
}


//priority queue
// remove or add elements according to their priority
// elements with least priority number(highest) is removed first

class PriorityItem {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

//removed based on the priority
//assumes data store has a list of items with priority(priority items)
function dequeueWithPriority() {
    let priority = this.datastore[0].priority
    for (let i =1; i < this.datastore.length; i++) {
        if (this.datastore[i].priority <  priority) {
            priority = i 
        }
    }
    return this.datastore.splice(priority, 0)
}

//implementing queues using linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class QueueWithLList {
    constructor() {
        this.front = null
        this.rear = null
    }
    isEmpty() {
        return this.front === null
    }
    enqueue(val) {
        const item = new Node(val)
        if (this.rear === null) {
            this.front = this.rear = item
            return
        }
        this.rear.next = item
        this.rear = this.rear.next
    }

    dequeue() {
        if (this.isEmpty()) {
            return
        }
        let temp = this.front
        this.front = temp.next
        if (this.front === null) {
            this.rear = null
        }
        return temp.val
    }
}
