//-->The height of a tree is the length of the 
// of the longest path from the root to a leaf nod
//--> The depth of a node is the length of the 
//longest path from that node to the root
//--> level = depth + 1
//--> The height of a tree depends on how 
// insertion took place
//--> search in a BST depends on the height 
// of the tree and can be logn or n in terms
// of time complexity
//--> A tree of height n can be converted into
// one with height of logn, i.e AVL trees
//--> AVL trees provide a means to convert
// BST into balanced BST
//--> A balanced tree(BST) is defined to be a tree 
//such that no two leaf nodes differ in distance
//from the root by more than one(same as difference bt the heights of the 
//left and right subtree should be at most 1)


function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
}

function BST() {
    this.root = null
    this.insert = insert
}

//if there is no root then the current node is the root
// if there is a root then we traverse and test each existing node's data 
// to see where we can place the the new node(whether left or right)
// we place new nodes only at leaf nodes

function insert(data) {
    const node = new Node(data, null, null)
    if (this.root === null) {
        this.root = node
    }
    else {
        let current = this.root
        let parent
        while (true) {
            parent  = current
            if (data < current.data) {
                current = current.left
                if (current === null) {
                    parent.left = node
                    break
                }
            }
            else {
                current = current.right
                if (current === null) {
                    parent.right = node
                    break
                }
            }
        }
    }
}

//inOrder traversal left->root->-right 
//recursively traverse until there are no more nodes
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left)
        console.log(node.data)
        inOrder(node.right)
    }
}

//preOrder  root->left->right
function preOrder(node) {
    if (node !== null) {
        console.log(node.data)
        preOrder(node.left)
        preOrder(node.right)
    }
}

//postOrder left->right->root
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.data)
    }
}
//trick to remember the traversal 
// preorder =  <
// inorder = ^
// postorder = >

//if value is less than current node's value
//repeat search in the left side(since it contains the smaller values)
//else repeat search in the right node
function search(value) {
    let current = this.root
    while (current.data !== value) {
        if (value < current.data) current = current.left
        else current = current.right
        if (current === null) return null
    }
    return current
}

//traverse through the left nodes
//last value is the min value
function getMin(root) {
    let current = root
    while (current.left !== null) {
        current = current.left
    }
    return current.data
}

//traverse through the right nodes
//last value is the min value
function getMax(root) {
    let current = root
    while (current.right !== null) {
        current = current.right
    }
    return current.data
}

function deleteNode(node, data) {
    if (node === null ) return null
    if (node.data === data) {
        if (node.left === null && node.right === null) return null  
        if (node.left === null) return node.right
        if (node.right === null) return node.left

        const temp = getMin(node.right)
        node.data = temp.data
        node.right = deleteNode(node.right, temp.data)
        return node
    }
    else if (data < node.data) {
        node.left = deleteNode(node.left, data)
        return node
    }
    else {
        node.right = deleteNode(node.right, data)
        return node
    }
}


function height(node) {
    if (node === null) {
        return 0
    }
    return 1 + Math.max(height(root.left), height(root.right))
}