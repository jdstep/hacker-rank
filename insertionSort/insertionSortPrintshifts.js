function processData(input) {
  // get the numbers into an array
  var ar = _input.split('\n')[1].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  // track the number of shifts that occured
  var numShifts = 0;
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
      // increment the number of shifts
      numShifts++;
    }
    // store the current value in the decremented index
    ar[j + 1] = value;
  }
  // print the number of shifts that occured
  console.log(numShifts);
  // return the sorted array
  return ar;
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
