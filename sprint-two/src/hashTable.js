var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._population = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pairs = this._storage.get(i) || [];

  if (this._storage.get(i)) {
    pairs.push([k,v]);
  } else {
    this._storage.set(i, [[k,v]]);
  }

  this._population++;

  if (this._population >= this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
  this._storage.set(i,pairs);

};

HashTable.prototype.resize = function(newLimit) {
  this._limit = newLimit;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  oldStorage.each(function(pairs){
    for (var i = 0; i<pairs.length; i++) {
      var pair = pairs[i];
      this.insert(pair[0],pair[1]);
    }
  });
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