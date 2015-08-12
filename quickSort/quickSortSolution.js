function processData(input) {
  var nums = _input.split('\n')[1].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  var result = partition(nums);
  return result;
}

function partition(nums) {
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
  // if there is more than one element in the pivot left
  if (pivotLeft.length > 1) {
    // sort pivot left
    pivotLeft = partition(pivotLeft);
  }
  // if there is more than one element in pivot right
  if (pivotRight.length > 1) {
    // sort pivot right
    pivotRight = partition(pivotRight);
  }
  // add the elements to results in order
  pivotLeft.forEach(function(num) {
    result.push(num);
  });
  result.push(pivot);
  pivotRight.forEach(function(num) {
    result.push(num);
  });
  // print the incremental results
  printArray(result);
  // return sorted array
  return result;
}

function printArray(array, printNewLine) {
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
   processData(_input);
});
