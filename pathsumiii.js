//Objective is to find the number of paths (that move downward) in a binary tree
//whose nodes add up to a given sum

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)

let sum = 12


//O(n^2) solution that does a nested dfs on each node to find valid paths

let count = 0
    
function dfs(node) {
    if (!node) {
        return
    }
    
    test(node, sum)
    
    dfs(node.left)
    dfs(node.right)
}

function test(node, sum) {
    if (!node) {
        return
    }
    
    if (node.val == sum) {
        count++
    }
    
    test(node.left, sum - node.val)
    test(node.right, sum - node.val)
}
dfs(tree.root)

return count