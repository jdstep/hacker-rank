// returns the nums at a given index for the passed in array
// used for hacker rank solutions to easily retrieve the numbers
function getNums(array, index) {
  index = index || 0;
  var result = array.split('\n')[index].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  return result;
} 
