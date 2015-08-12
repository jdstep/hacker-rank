function insertionSort (ar) {
  // for each element starting at the 2nd element
  for(i = 1; i < ar.length; i++){
    // store the current value
    var value = ar[i];
    // get the previous index
    var j = i - 1;
    // while the previous index is larger than the current value
    while(ar[j] > value){
      // copy the previous index into the current index
      ar[j + 1] = ar[j];
      // decrement the previous index
      j = j - 1;
    }
    // store the current value in the decremented index
    ar[j + 1] = value;
  }
  // return the sorted array
  return ar;
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
  // get the number array
  var ar = _input.split('\n')[1].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  // sort the array
  var sortedAr = insertionSort(ar);
  // print the array to the console
  printArray(sortedAr);
});
