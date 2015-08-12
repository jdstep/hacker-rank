function processData(input) {
  var __input_array = input.split('\n');
  var n = __input_array[0];
  // put all of the nums as ints into an array
  var nums = __input_array[1].split(' ').map(function(stringNum) {
    return parseInt(stringNum);
  });
  // get the pre-defined unsorted number
  var unsortedNum = nums[nums.length-1];
  // start at the end of the array
  var index = nums.length - 1;
  // while the unsorted num does not fit in the current position
  while (unsortedNum < nums[index-1]) {
    // duplicate the next number to the left into the current posiiton
    nums[index] = nums[index - 1];
    // print the incremental result
    printArray(nums);
    // move left in the array
    index--;
  }
  // set the unsorted number into the current position
  nums[index] = unsortedNum;
  // print the end result
  printArray(nums);

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
   processData(_input);
});
