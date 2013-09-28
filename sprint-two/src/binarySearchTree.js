var makeBinarySearchTree = function(value){
  var BST = {};
  BST._root = null;
  extend(BST, BSTMethods);
  return BST;
};

var makeBSTNode = function(value) {
  var node = {};

  node.value = value;
  node.left = null;
  node.right = null;
  node.visited = false;

  return node;
};

var extend = function(to, from) {
  for (var method in from)
    to[method] = from[method];
};

var BSTMethods = {};

BSTMethods.insert = function(value) {

  var node = makeBSTNode(value);

  if (this._root === null) {
    this._root = node;
  }

  else {

    var current = this._root;

    while (true) {

      if (value < current.value) {

        if (current.left === null) {
          current.left = node;
          break;
        }
        else
          current = current.left;
      }

      else if (value > current.value) {

        if (current.right === null) {
          current.right = node;
          break;
        }
        else
          current = current.right;

      }

      else {
       break;
     }
    }
  }
};

BSTMethods.contains = function(target) {
  var isFound;
  var current = this._root;

  if (this._root === null) {
    isFound = false;
  }

  else {
    while (true) {
      if (target < current.value) {
        if (current.left === null) {
          isFound = false;
          break;
        }
        else { current = current.left; }
      }

      else if (target > current.value) {
        if (current.right === null) {
          isFound = false;
          break;
        }
        else {current = current.right;}
      }

      else if (target === current.value)
      {
        isFound = true;
        break;
      }
    }
  }
  return isFound;

};

BSTMethods.depthFirstLog = function(callback) {

  var results = [];

  var walk = function(node) {

    if (!node.visited) {
      results.push(node.value);
      node.visited = true;
    }

    if (node.left && !node.left.visited) {
      walk(node.left);
    }

    if (node.right && !node.right.visited) {
      walk(node.right);
    }

    else {
      return;
    }

  };

  walk(this._root);

  return results;
};


