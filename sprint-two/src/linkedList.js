var makeLinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = makeNode(value);

    list.tail ? list.tail.next = node : list.head = node;

    list.tail = node;
  };

  list.removeHead = function(){

    var headNode = list.head;

    list.head = list.head.next;

    return headNode;
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

  return node;
};