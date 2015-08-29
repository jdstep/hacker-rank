
function getNums(array, index) {
  index = index || 0;
  var result = array.split('\n')[index].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  return result;
} 

function modifiedFib(a, b, n) {
  var count = 2;
  var result = 0;
  var numA = a;
  var numB = b;

  while (count < n) {
    console.log('a', a, 'b', b);
    result = Math.pow(numB, 2) + numA;

    numA = numB;
    numB = result;
    count++;
    console.log('result', result);
  }

  return result;
}

console.log(modifiedFib(0, 1, 5));

