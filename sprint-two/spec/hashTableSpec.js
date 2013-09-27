describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2', v3 = 'val3', v4 = 'val4';
    hashTable.insert(v1, v1);
    hashTable.insert(v3, v3);
    hashTable.insert(v2, v2);
    hashTable.insert(v4, v4);
//overwhelm the hash table by setting limit to a small whole number when performing this test

    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should remove hash-value pairs", function(){

    var v1 = 'val1', v2 = 'val2', v3 = 'val3';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    hashTable.insert(v3, v3);

    hashTable.remove(v1); 

    expect(hashTable.retrieve(v1)).toEqual(undefined);
    expect(hashTable.retrieve(v2)).toEqual(v2);
    
  });


});
