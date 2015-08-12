function processData(input) {
  var __input_array = input.split('\n');
  var n = __input_array[0];
  // put all of the nums as ints into an array
  var nums = __input_array[1].split(' ').map(function(stringNum) {
    return parseInt(stringNum);
  });
  // for each number except for the last number
  for (var i = 0; i < nums.length - 1; i++) {
    // if the current number is out of place
    if (nums[i] > nums[i+1]) {
      // sort the current number
      nums = sortNumber(nums, i+1);
    }
    // print this iteration's result
    printArray(nums);
  }
}

function sortNumber(numArray, targetIndex) {
  var unsortedNumArray = numArray.slice();
  // get the unsorted value
  var unsortedNum = unsortedNumArray[targetIndex];
  // start at the place where the unsorted number is
  var index = targetIndex;
  // while the unsorted num does not fit in the current position
  while (unsortedNum < unsortedNumArray[index - 1]) {
    // duplicate the next number to the left into the current posiiton
    unsortedNumArray[index] = unsortedNumArray[index - 1];
    // move left in the array
    index--;
  }
  // set the unsorted number into the current position
  unsortedNumArray[index] = unsortedNum;
  // return the array with the sorted element
  return unsortedNumArray;
};

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
   processData(_input);
});
