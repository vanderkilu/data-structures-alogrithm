function Node(element) {
    this.element = element
    this.next = null
}

function LList() {
    this.head = new Node('head')
    this.find = find
    this.display = display
    this.insert = insert
    this.findPreviousNode = findPreviousNode
    this.remove = remove
}

function find(element) {
    let currentNode = this.head

    while (currentNode.element !== element) {
        currentNode = currentNode.next
    }
    return currentNode
}

function display() {
    let currentNode = this.head

    while (currentNode.next !== null) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next
    }
}

function insert(newElement, item) {
    const newNode = new Node(newElement)
    const current = this.find(item)

    newNode.next = current.next
    current.next = newNode

}

function findPreviousNode(element) {
    let currentNode = this.head

    while(currentNode.next !== null && 
        currentNode.next.element !== element) {
            currentNode = currentNode.next
    }
    return currentNode
}

function remove(element) {
    let beforeNodeToDelete = this.findPreviousNode(element)
    if(beforeNodeToDelete.next !== null)  {
        beforeNodeToDelete.next = beforeNodeToDelete.next.next
    }
}

const cities = new LList()
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();