function Node(val, next) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

}

SinglyLinkedList.prototype.__getNodeAt = function(index) {

};

SinglyLinkedList.prototype.push = function(val) {
  // console.log('val', val);
  var node = new Node(val);
  if (!this.tail && !this.head) {
    this.head = node;
    this.tail = this.head;
  } 
  this.tail.next = node;
  this.tail = node;
  this.length++;
  // console.log('line27', this);
  return this;  
};

SinglyLinkedList.prototype.clear = function() {
  
};

SinglyLinkedList.prototype.pop = function() {
  if (this.head === null) {
    return undefined;
  }
  var temp = this.head;
  var i = 2;
  while(i < this.length) {
    temp = temp.next;
    i++;
  }
  var popped = this.tail.val
  this.tail = temp;
  this.tail.next = null;
  this.length--;
  return popped;
};

SinglyLinkedList.prototype.unshift = function(val) {
  var node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.length++;
  return this;
};

SinglyLinkedList.prototype.shift = function() {
  var shifted = this.head.val
  // console.log('line61', this);
  this.head = this.head.next;
  // console.log('line63',this);
  this.length--;
  return shifted;
};

SinglyLinkedList.prototype.get = function(index) {
  console.log('line70', index);
  console.log('line71',this.length);
  if(index >= this.length ) {
    return undefined;
  }
  var temp = this.head;
  console.log('line76',temp.next);
  var i = 0;
  while(i < index) {
    temp = temp.next;
    i++;
  }
  console.log(temp);
  return temp.val;
};

SinglyLinkedList.prototype.set = function(index, val) {
  var temp = this.head;
  var i = 0;
  while(i < index) {
    temp = temp.next;
    i++;
  }
  temp.val = val;
};

SinglyLinkedList.prototype.remove = function(index) {
  var temp = this.head;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length--;
    return temp.val;
  }
  var i = 0;
  // var tempIndex = index
  while(i < index - 1) {
    temp = temp.next;
    i++;
  }
  console.log(temp);
  console.log('index', index);
  valRemoved = temp.next.val;
  if (index !== this.length - 1){
    temp.next = temp.next.next;
    // seems that the index 3 (val=4) that was removed still has a reference point pointing to the new index 3 (val 5);
  }
  this.length--;
  return valRemoved;
};

SinglyLinkedList.prototype.reverse = function() {

};

SinglyLinkedList.prototype.reverseRecursive = function() {

};

module.exports = SinglyLinkedList;
