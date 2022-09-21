/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    //start at 1 (a)
    // queue (breadth search) check if second layer has children
    //  add counter for each layer
    // if it doesn't have children return counter
    if(!node){
      return 0
    }
    let counter = 1
    // let queue = [node]

    // while(queue.length){
    //   counter++
    //   let current = queue.shift()
    //   if (!current.children){
    //     return counter
    //   }

    //   for (let child of current.children){
    //     queue.push(child)
    //   }

    // }

    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + counter



  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    //if a has children -> look into c
    if(!node){
      return 0
    }
    let counter = 1
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + counter

  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {
    if(!node){
      return null
    }

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
