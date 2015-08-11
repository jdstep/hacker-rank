function processData(input) {
  __input_stdin_array = input.split("\n");
  var res = 0;
  var n = parseInt(__input_stdin_array[0].trim(), 10);
  var numArray = __input_stdin_array[1].split(' ');
  for (var i = 0; i < n; i++) {
    var currentNum = parseInt(numArray[i]);
     res += currentNum;
  }
  console.log(res);
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