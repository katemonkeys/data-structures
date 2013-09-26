var Queue = function(storage, front, back){
  this.storage = storage || {};
  this.front = front || 0;
  this.back  = back || 0;
};


Queue.prototype.enqueue = function(value){
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function(){
  var element = this.storage[this.front];
  if (this.front<this.back) {this.front++;}
  return element;
};

Queue.prototype.size = function(){
  return this.back - this.front;
};