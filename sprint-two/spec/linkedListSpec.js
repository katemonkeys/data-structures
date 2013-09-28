describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {

    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("takes a value and adds it to the end of the list", function(){
    linkedList.addToTail(1);
    expect(linkedList.tail.value).toEqual(1);
  });

  it("removes the first node from the list and returns its value", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    var node = linkedList.removeHead();
    expect(node.value).toEqual(1);
  });

  it("returns boolean reflecting whether or not the passed-in value is in the linked list", function(){
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).toEqual(true);

    linkedList.addToTail(2);
    expect(linkedList.contains(2)).toEqual(true);

    linkedList.removeHead();
    expect(linkedList.contains(1)).toEqual(false);
  });

/* Doubly Linked List */

  it("should properly reference previous nodes", function(){

    var node1 = linkedList.addToTail(1);
    var node2 = linkedList.addToTail(2);
    // alert(node2 );
//    var node3 = linkedList.addToTail(3);
//    var node4 = linkedList.addToTail(4);

    expect(linkedList.tail.previous.value).toEqual(1);
    expect(node2.previous).toEqual(node1);
    expect(node1.previous).toEqual(null);
  });


  it("should add a head node before the beginning of the list", function(){

    var node1 = linkedList.addToTail(1);
    var node2 = linkedList.addToTail(2);
    var node3 = linkedList.addToHead(3);
//    var node4 = linkedList.addToTail(4);

    expect(linkedList.tail.value).toEqual(2);
    expect(linkedList.head.value).toEqual(3);
  });


  it("should remove a tail node", function(){

    var node1 = linkedList.addToTail(1);
    var node2 = linkedList.addToTail(2);
    var node3 = linkedList.addToTail(3);
    var removedNode = linkedList.removeTail();

    expect(removedNode.value).toEqual(3);
    expect(linkedList.tail).toEqual(node2);
    expect(node2.next).toEqual(null);
  });



});