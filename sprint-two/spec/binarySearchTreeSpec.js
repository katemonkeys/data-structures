describe("binarySearchTree", function() {
  var binarySearchTree;
  var data = [4,2,6,1,3,5,7,8,0];

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();

    for (var i = 0; i < data.length; i++) {
      binarySearchTree.insert(data[i]);
    }
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should have .left and .right properties, which place all lower values to the left and all higher values to the right, respectively", function(){
    expect(binarySearchTree._root.left).toNotEqual(null);
    expect(binarySearchTree._root.left.value).toEqual(2);
    expect(binarySearchTree._root.left.left.value).toEqual(1);
    expect(binarySearchTree._root.left.right.value).toEqual(3);
    expect(binarySearchTree._root.right.left.value).toEqual(5);
  });

  it("should have a .insert property, which accepts a value and places it in the tree in the correct position", function(){
    expect(binarySearchTree._root.left.value < binarySearchTree._root.right.value).toEqual(true);
    expect(binarySearchTree._root.left.left.value < binarySearchTree._root.left.right.value).toEqual(true);
  });



  it("should have a .contains method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree", function(){

    expect(binarySearchTree.contains(5)).toEqual(true);
    expect(binarySearchTree.contains(50)).toEqual(false);

  });

  it("should have a .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.", function(){
    expect(function(){}).toEqual(36);
  });

});