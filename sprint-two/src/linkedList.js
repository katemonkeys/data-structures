var makeLinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = makeNode(value);

    node.previous = list.tail;

    list.tail ? list.tail.next = node : list.head = node;

    list.tail = node;

    return node;
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    list.head.previous = node;
    node.next = list.head;
    list.head = node;
    return node;
  };

  list.removeHead = function(){

    var headNode = list.head;

    list.head = list.head.next;

    list.head.previous = null;

    return headNode;
  };

  list.removeTail = function(){

    var tailNode = list.tail;

    list.tail = list.tail.previous;

    list.tail.next = null;

    return tailNode;

  };

  list.contains = function(value){

    var node = list.head;

    while (node) {
      if (node.value === value)
        return true;

      node = node.next;
    }

    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};