describe("binarySearchTree", function() {
  var binarySearchTree;
  var data = [4,2,6,1,3,5,7,8,0];

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  // it("should have a .left property, where all values are lower than the current value", function(){

  //   for (var i = 0; i < data.length; i++) {
  //     binarySearchTree.insert(data[i]);
  //   }
  //   expect(binarySearchTree.left).toEqual(2);

  // });

  // it("should have a .right property, where all values are higher than the current value", function(){

  // });

  // it("should have a .insert property, which accepts a value and places it in the tree in the correct position", function(){

  // });

  // it("should have a .contains method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree", function(){

  // });

  // it("should have a . .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.", function(){

  // });

});