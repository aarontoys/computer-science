var heap = require('./heap');

function main (coordinates) {
  // write your function(s) here.
  var arr = [];
  for (var i = 0; i < coordinates.length; i++) {
    var test = heap[coordinates[i][0]][coordinates[i][1]];
    // console.log(test);
    arr.unshift(test);
  }
  return arr;
}

mySentence = main([[11,0],[0,0],[2,7],[0,0],[2,0],[0,0],[18,7],[0,0],[11,0],[0,0],[2,7],[0,0],[2,8],[0,0],[11,1]]);

// The printer will print each word/character starting from
// the end of the array, like a stack. For example,
// ["I", " ", "am"] will be printed as "am I"
function printer (sentenceFragments) {
  var sentence = "";
  var stackRepresentation = sentenceFragments.reduce(function (acc, frag) {
    acc.push(frag);
    return acc;
  }, []);

  for ( var i = sentenceFragments.length - 1; i > -1; i-- ) {
    console.log("Peek:",
                "'" + stackRepresentation[stackRepresentation.length-1] + "'",
                "\t", "Stack:", stackRepresentation);
    stackRepresentation.pop();
    sentence += sentenceFragments[i];
  };

  console.log("Finished:", sentence);
}

// Run the printer with your constructed "stack"
// to output a full sentence!

printer(mySentence);
