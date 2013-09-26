var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};

  instance.front = 0;
  instance.back  = 0;

  return instance;
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

