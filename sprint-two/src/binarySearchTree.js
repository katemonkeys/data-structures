var makeBinarySearchTree = function(value){

  var BST = {};

  BST.value = value || 0;
  BST.left = null;
  BST.right = null;
//BST.parent = this;

  extend(BST, BSTMethods);

  return BST;
};

var extend = function(to, from) {
  for (var method in from)
    to[method] = from[method];
};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  // var newValueToCompare = comparison;
  // if (value < this.value && this.left) {
  //   newValueToCompare = this.left;
  //   this.insert(newValueToCompare);
  // }
  // else if (value > this.value && this.right) {
  //   newValueToCompare = this.right;
  //   this.insert(newValueToCompare);
  // }
  // else {
  //   var node = makeBinarySearchTree(value);
  //   if (value > this.value) {
  //     this.right = node;
  //   }
  //   else {
  //     this.left = node;
  //   }
  // }
//probably could add a return statement like "nothing to insert" if value === comparison //
};

BSTMethods.contains = function(target) {};

BSTMethods.depthFirstLog = function() {};

