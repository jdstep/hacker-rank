function getNums(array, index) {
  index = index || 0;
  var result = array.split('\n')[index].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  console.log(result);
  return result;
}

function countOccurances(array, occurancesIndex, occurancesObj) {
  var num;
  var result = occurancesObj || {};
  // for each number in the array
  for (var i = 0; i < array.length; i++) {
    // store the current number
    num = array[i];
    // if this is the first time we have seen the number, create an empty array
    result[num] = result[num] || [];
    // if we have seen this number before
    if (result[num][occurancesIndex]) {
      // increment that number's counter at the specified index
      result[num][occurancesIndex] += 1;
    } // else if we have not seen this number before
    else {
      // set that counter to 1 at the specificed index
      result[num][occurancesIndex] = 1;
    }
  }
  // return the 
  return result;
}

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

function findMissingNums(numObj) {
  var result = [];
  var curentOccurances;
  // for each number key
  for (var num in numObj) {
    // set the current number of occurances to the first element
    currentOccurances = numObj[num][0];
    // for each remaining number of occurances
    for (var i = 1; i < numObj[num].length; i++) {
      // if that number of occurances is different than the first element
      if (currentOccurances !== numObj[num][i]) {
        // store that number of the result array
        result.push(parseInt(num));
      }
    }
  }
  // return the numbers that occur an unequal number of times
  return result;
}

function processData(shortList, longList) {
// function processData(input) { // for use in hacker rank
  // var shortList = getNums(input, 3); // for use in hacker rank
  // var longList = getNums(input, 1); // for use in hacker rank
  var numOccurances = {};
  var result = [];
  var sortedResult = [];

  numOccurances = countOccurances(shortList, 0, numOccurances);
  numOccurances = countOccurances(longList, 1, numOccurances);
  
  result = findMissingNums(numOccurances);
  sortedResult = insertionSort(result);
  console.log(sortedResult);
  // printArray(sorrtedResult); // for use in hacker rank
  return sortedResult;
} 


function printArray(array, printNewLine) {
  var arrString = "";

  for (var i = 0; i < array.length; i++) {
    arrString += array[i] + " ";
  }

  console.log(arrString);
}

/*

NOTE: This Hacker Rank challenge is broken as of this writing
I tested this with custom inputs and changing the primary function's arguments


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

*/

// var arr1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
// var arr2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

// processData(arr1, arr2); // [204, 205, 206]
