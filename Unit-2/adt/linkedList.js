var Node = require('./node');

var LinkedList = function (node) {
  this.head = node;
  this.tail = this.head;
}

LinkedList.prototype.insertHead = function(data) {
  var node = new Node(data);
  //insert a new node as the head of this linked list
  if (!this.head) {
    this.head = node;
  } else {
    node.next = this.head
    this.head.prev = node;
    this.head = node;
  }
  return this;
};

LinkedList.prototype.insertTail = function (data) {
  //create a new node
  //find the end of the list
  //append that new node
  var node = new Node (data);

  if (!this.head) {
    this.head = node;
    // this.tail = this.head;
  } 
  else {
    // var end = this.head;
    // while (end.next ) {
    //   end = end.next
    // }
    // end.next = node;
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    return this;
  }
};

module.exports = LinkedList;