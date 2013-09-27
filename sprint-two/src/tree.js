var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from)
    to[key] = from[key];
};

var treeMethods = {};

treeMethods.addChild = function(value){

  var node = makeTree(value);

  node.parent = this;

  this.children.push(node);

  return node;

};

treeMethods.contains = function(target){

  if (this.value === target) {
      return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    return this.children[i].contains(target);
  }

  return false;
};