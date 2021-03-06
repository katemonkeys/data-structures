var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.len = 0; // Hint: set an initial value here

  extend(instance, stackMethods);

  return instance;
};

var extend = function(to,from) {

  for (var property in from) {
    to[property] = from[property];
  }
};

var stackMethods = {

  push: function(value){
    this.storage[this.len] = value;
    this.len++;
  },

  pop: function(){

    var element;
    if (this.len) {
      element = this.storage[this.len-1];
      // delete storage[size];
      this.len--;
    }
    return element;

  },

  size: function(){
    return this.len;
  }

};

