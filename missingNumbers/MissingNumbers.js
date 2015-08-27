function getNums(array, index) {
  index = index || 0;
  var result = array.split('\n')[index].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  return result;
}

var quickSort = function(array, start, end) {
  var pivotIndex;
  // if the divided array has 1 or more elements
  if (end - start >= 1) {
    // partition the pivot index to its sorted location
    // and get the pivot index
    pivotIndex = partition(array, start, end);
    // sort the array to the left of the pivot
    quickSort(array, start, pivotIndex - 1);
    // sort the array to the right of the pivot
    quickSort(array, pivotIndex+1, end);
  }
};

// in-place swap of an array given the array and two indicies
var swap = function(array, indexA, indexB) {
  var tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;
};

var partition = function(array, start, end) {
  // set the pivot to the end index
  var pivotValue  = array[end];
  // i keeps track of the index for values lower than the pivot
  // and eventually becomes in the index for the pivot
  var i = start - 1;
  // from the start index until the index before the pivot
  for (var j = start; j < end; j++) {
    // if the current value is less or equal to the pivot
    if (array[j] <= pivotValue) {
      // increment the tracker for values lower than the pivot
      i++;
      // swap the lower index value with the value at the current index
      swap(array, i, j)
    }
  }
  // increment the lower index to be one higher than the low numbers
  // this is the new pivot index
  i++
  // swap the pivot at the end to its correct sorted location
  swap(array, i, end);
  // return the index of the sorted pivot
  
  printArray(array);
  return i;
}

function printArray(array, printNewLine) {
  var arrString = "";

  for (var i = 0; i < array.length; i++) {
    arrString += array[i] + " ";
  }

  console.log(arrString);
}

function processData(input) {
    //Enter your code here
  var nums = getNums(input, 1);
  quickSort(nums, 0, nums.length - 1);
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
