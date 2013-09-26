var Stack = function(storage, len){
  this.storage = storage || {};
  this.len     = len     || 0;
};

Stack.prototype.push = function(value){
  this.storage[this.len] = value;
  this.len++;
};

Stack.prototype.pop = function(){

  if (this.len) {
    this.len--;
    return this.storage[this.len];
  }

};

Stack.prototype.size = function(){
  return this.len;
};

