function convertBinary (binary) {
  var total = 0;
  var binaryStr = binary.toString().split('').reverse().join('');
  for (var i = 0; i < binaryStr.length; i++) {
    total += parseInt(binaryStr[i])*Math.pow(2,i);
  }
  console.log(String.fromCharCode(total));
}

// convertBinary(11000011);

function letterToBinary (letter) {
  var num = letter.charCodeAt(0);
  console.log('line14', letter);
  console.log('line15', num);
  var binaryStr = ''
  if (num >= 128) {
    binaryStr += '1';
    num -= 128;
  } else if (num >= 64 && num < 128) {
    binaryStr += '1';
    console.log('line22', binaryStr);
    console.log('line23', num);
    num -= 64;
    console.log('line24', num);
  } else if (num >= 32 && num < 64) {
    binaryStr += '1';
    num -= 32;
  } else if (num >= 16 && num < 32) {
    binaryStr += '1';
    num -=16;
  } else if (num >= 8 && num < 16) {
    binaryStr += '1';
    num -=8;
  } else if (num >= 4 && num < 8) {
    binaryStr += '1';
    num -=4;
  } else if (num >= 2 && num < 4) {
    binaryStr += '1';
    num -=2;
  } else if (num === 1) {
    console.log('line42', num);
    binaryStr =+ '1'
  }
  console.log(num);
}

letterToBinary('A');
