Array.prototype.linearSearch = function(val){

  //my solution

  // var count = 0;
  // for(var i = 0; i < this.length; i++) {

  //   if(this[i] === val) {
  //     return count;
  //   } 
  //       count++;
  //   if(count === this.length-1) {
  //     return -1;
  //   }
  // }

  //garan's solution
  for (var i = 0; i < this.length; i++) {
    if(this[i] === val) {
      return i
    }
  }
  return -1;
}

Array.prototype.binarySearch = function(val){
  var mid = Math.floor(this.length/2);

  while (val !== this[mid]) {
    if(mid < 0 || mid >= this.length) {
      return -1;
    }
    else if (val > this[mid] ) {
      mid = mid + Math.floor(mid/2)
    }
    else if (val < this[mid] ){
      mid = mid - (Math.floor(mid/2) || 1)
    }
  }
  return mid;
};

module.exports = { Array };