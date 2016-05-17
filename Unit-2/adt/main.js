var Node = require('./node');
var LinkedList = require('./linkedList');

var node = new Node(9);
// var node2 = new Node(20);
var list = new LinkedList(node);

//get the value from the first node
// list.head.data  => 10

//get the value from the 2nd node
//list.head.next.data => 20
list.insertHead(5)
    .insertHead(4)
    .insertHead(3)
    .insertTail(10)
    .insertTail(11)
    .insertTail(12)
    .insertHead(1)
    .insertTail(50)

console.log('Should be true: ', list.head.data === 1);
console.log('Should be true: ', list.head.next.next.data === 4);
console.log('Should be true: ', list.head.next.next.next.prev.data === 4);
console.log('Should be true: ', list.tail.data === 50);
console.log('Should be true: ', list.tail.prev.prev.data === 11);
console.log('Should be true: ', list.tail.prev.next.prev.prev.next.prev.prev.prev.prev.data === 5);
                                    //50 //12 //50 //12 //11 //12 //11 //10 //9  //5
