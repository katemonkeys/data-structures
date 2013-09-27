describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("takes any string and adds it to the set", function(){

    var set = makeSet();

    set.add('hello');
    set.add('there');
    set.add('hello');

    expect(set._storage['hello']).toEqual('hello');

  });

  it("takes any string and returns a boolean reflecting whether it can be found in the set", function(){

    var set = makeSet();

    set.add('hello');
    set.add('there');

    expect(set.contains('hello')).toEqual(true);
  });

  it("takes any string and removes it from the set, if present", function(){

    var set = makeSet();

    set.add('hello');
    set.add('there');
    set.remove('hello');

    expect(set._storage['hello']).toEqual(undefined);
    expect(set.contains('hello')).toEqual(false);


  });
});