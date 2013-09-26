var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};

  instance.front = 0;
  instance.back  = 0;

  extend(instance, queueMethods);

  return instance;
};

var extend = function(to, from) {
  for (var property in from) {
    to[property] = from[property];
  }
};


var queueMethods = {

  enqueue: function(value){

    this.storage[this.back] = value;
    this.back++;

  },

  dequeue: function(){

    var element = this.storage[this.front];
    if (this.front<this.back) {this.front++;}
    return element;

  },

  size: function(){
    return this.back - this.front;
  }

};

