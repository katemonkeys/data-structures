var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(string){

  this._storage[string] = string;

};

setPrototype.contains = function(target){

  return Boolean(this._storage[target]);

};

setPrototype.remove = function(string){

  delete this._storage[string];

};
