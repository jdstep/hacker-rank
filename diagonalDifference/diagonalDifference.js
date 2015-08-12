function processData(input) {
    //Enter your code here
  __input_stdin_array = input.split("\n");
  var matrixLength = __input_stdin_array[0];
  var matrix = [];
  var ULtoBRsum = 0;
  var BLtoURsum = 0;
  var result;
  var xCoor;
  var yCoor;
  // create the matrix
  for (var i = 1; i <= matrixLength; i++) {
    matrix.push(__input_stdin_array[i].split(' '));
  }
  // start in the top left corner
  xCoor = 0;
  yCoor = 0;
  // add each value moving to the bottom right
  while (xCoor < matrixLength) {
    ULtoBRsum += parseInt(matrix[xCoor][yCoor]);
    xCoor++;
    yCoor++;
  }
  // start at the bottom left corner
  xCoor = 0;
  yCoor = matrixLength - 1;
  // add each value moving to the top right
  while (xCoor < matrixLength) {
    BLtoURsum += parseInt(matrix[xCoor][yCoor]);
    xCoor++;
    yCoor--;
  }
  // get the absolute value of the difference between the sums
  result = Math.abs(ULtoBRsum - BLtoURsum);

  // return the result
  console.log(result);
    
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
