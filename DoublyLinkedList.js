function Node(element) {
    this.element = element
    this.next = null
    this.previous = null
}


function DLLinkedList() {
    this.head = new Node('head')
    this.find = find
    this.display = display
    this.insert = insert
    this.remove = remove
    this.findLast = findLast
    this.displayReverse = displayReverse
}

function find(element) {
    let currentNode = this.head

    while(currentNode.element !== element) {
        currentNode = currentNode.next
    }
    return currentNode
}

function insert(newElement, item) {
    let current = this.find(item)
    let newNode = new Node(newElement)

    newNode.next = current.next
    newNode.previous = current
    current.next = newNode
}

function remove(item) {
    let current = this.find(item)
    
    if (current.next !== null) {

        current.previous.next = current.next
        current.next.previous = current.previous

        current.next = null
        current.previous = null
    }
    
}

function findLast() {
    let current = this.head

    while (current.next !== null) {
        current = current.next
    }
    return current
}

function displayReverse() {
    let current = this.findLast()

    while (current.previous !== null) {
        console.log(current.element)
        current = current.previous
    }
}
