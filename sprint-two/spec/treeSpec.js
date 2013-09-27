describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("takes any value, sets that as the target of a node, and adds that node as a child of the tree", function() {
    var tree  = makeTree(5);

    tree.addChild(6);
    expect(tree.children[0].value).toEqual(6);

    tree.children[0].addChild(7);
    expect(tree.children[0].children[0].value).toEqual(7);
  });

  it("takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node", function(){
    var root  = makeTree(1);

    root.addChild(2);
    root.addChild(3);

    root.children[0].addChild(4);
    root.children[1].addChild(4);

    expect(root.value).toEqual(1);
    expect(root.children[1].value).toEqual(3);
    expect(root.contains(2)).toEqual(true);
    expect(root.contains(4)).toEqual(true);
    expect(root.contains(9.3)).toEqual(false);
  });
  
});