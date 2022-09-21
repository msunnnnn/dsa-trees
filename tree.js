/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  //check if arr is empty
  // need current node to be last item in array
  // get the node's value and add to total
  // loop through node's children
  // if that node has children, add to array

  sumValues(val) {
    if (!this.root) {
      return 0;
    }

    let total = 0;
    let arr = [this.root];

    while (arr.length) {
      let current = arr.pop();

      total += current.val;

      for (let child of current.children) {
        arr.push(child);
      }
    }
    return total;
  }







  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0;
    }

    let total = 0;
    let arr = [this.root];

    while (arr.length) {
      let current = arr.pop();

      if (current.val % 2 === 0) {
        total++;
      }
      for (let child of current.children) {
        arr.push(child);
      }
    }
    return total;



  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }

    let total = 0;
    let arr = [this.root];

    while (arr.length) {
      let current = arr.pop();

      if (current.val > lowerBound) {
        total++;
      }
      for (let child of current.children) {
        arr.push(child);
      }
    }
    return total;

  }
}

module.exports = { Tree, TreeNode };
