var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i)) {
    this._storage.get(i).push([k,v]);
  } else {
    this._storage.set(i, [[k,v]]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var all = this._storage.get(i);
  for (var j = 0; j<all.length; j++) {
    if (all[j][0] === k){
      return all[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var all = this._storage.get(i);
  for (var j = 0; j<all.length; j++) {
    if (all[j][0] === k){
      this._storage.set(i, all.slice(0,j).concat(all.slice(j+1,all.length)));
    }
  }
};

