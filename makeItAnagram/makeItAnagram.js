function getString(array, index) {
  index = index || 0;
  var result = array.split('\n')[index];
  return result;
}

function processData(input) {
  var letter;
  var stringA = getString(input, 0);
  var stringB = getString(input, 1);
  var occurances = {};
  var numToDelete = 0;

  for (var i = 0; i < stringA.length; i++) {
    letter = stringA[i];
    if (!occurances[letter]) {
      occurances[letter] = 0;
    }
    occurances[letter] += 1;
  }

  for (var i = 0; i < stringB.length; i++) {
    letter = stringB[i];
    if (!occurances[letter]) {
      occurances[letter] = 0;
    }
    occurances[letter] -= 1;
  }

  for (var key in occurances) {
    numToDelete += Math.abs(occurances[key]);
  }

  console.log(numToDelete);
  
  return numToDelete;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
