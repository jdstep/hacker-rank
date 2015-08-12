function processData(input) {
  var nums = _input.split('\n')[1].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  var pivot = nums[0];
  var pivotLeft = [];
  var pivotRight = [];
  var value;
  var result = [];
  // for each number
  for (var i = 1; i < nums.length; i++) {
    value = nums[i];
    // store the number in pivotLeft if it is less than the pivot
    // else store the number in pivotRight
    // (assume all numbers are unique and pivot has no duplicates)
    value < pivot ? pivotLeft.push(value) : pivotRight.push(value);
  }
  pivotLeft.forEach(function(num) {
    result.push(num);
  });
  result.push(pivot);
  pivotRight.forEach(function(num) {
    result.push(num);
  });
  return result;
}

function printArray(array) {
  var arrString = "";

  for (var i = 0; i < array.length; i++) {
    arrString += array[i] + " ";
  }

  console.log(arrString);
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  var result = processData(_input);
  printArray(result);
});
