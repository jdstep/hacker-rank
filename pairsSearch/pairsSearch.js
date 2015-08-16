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

{
  1: true,
  5: true,
  3: true,
  4: true,
  2: true
}

5 - 3 = 2

0 - 2 = 2

-1 - -3 = 2

[1, 3] // 1

[4, 0] // 0

1 - -1 = 2



*/

function makeNumObj(nums) {
  var numObj = {};

  for (var i = 0; i < nums.length; i++) {
    numObj[nums[i]] = true;
  }

  return numObj;
}
function processData(input) {
  var nums = getNums(input, 1);
  var targetDifference = getNums(input, 0)[1];
  var count = 0;
  var currentDifference;
  var numObj = makeNumObj(nums);
  // for each num
  for (var i = 0; i < nums.length; i++) {
    // calculate the value needed to get the target difference
    currentDifference = nums[i] - targetDifference;
    // if that value needed exists in the array
    if (numObj[currentDifference]) {
      // increment the count
      count++;
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
