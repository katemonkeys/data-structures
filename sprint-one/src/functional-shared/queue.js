var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var front = 0;
  var back  = 0;

  // Implement the methods below

  instance.enqueue = function(value){

    storage[back] = value;
    back++;

  };

  instance.dequeue = function(){

    var element = storage[front];
    if (front<back) {front++;}
    return element;

  };

  instance.size = function(){
    return back - front;
  };

  return instance;
};


var queueMethods = {};

