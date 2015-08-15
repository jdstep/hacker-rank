function getNums(array, index) {
  index = index || 0;
  var result = array.split('\n')[index].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  return result;
}

/*
input: targetDifference
output: number of integers whose difference is the targetDifference
edge: one integer, zero integer pairs that have that difference, wrong type, zero numbers, negative numbers
notes: take the absolute value of the difference


-1 - 1

ex1)
[1, 5, 3, 4, 2] // 3

[1, 3] // 1

[4, 0] // 0

*/
function processData(input) {
  var nums = getNums(input, 1);
  var targetDifference = getNums(input, 0)[1];
  var count = 0;
  var currentDifference;
  
  // for each num
  for (var i = 0; i < nums.length; i++) {
    // for each remaining num
    for (var j = i+1; j < nums.length; j++) {
      // calculate the difference between num and remaining num
      currentDifference = Math.abs(nums[i] - nums[j]);
      // if the difference is the same as targetDifference
      if (currentDifference === targetDifference) {
        // increment the counter
        count++;
      }
    }
  }
  
  // print the counter
  console.log(count);
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
