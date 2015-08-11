function processData(input) {
    //Enter your code here
  __input_stdin_array = input.split("\n");
  var res;
  var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;
  console.log(input);
  // for (var i = 0; i<n;i++) {
  //    var _line = __input_stdin_array[__input_currentline].trim();
  //    __input_currentline += 1;
  //     var line = _line.split(" ");
  //     var _a = parseInt(line[0]);
  //     var _b = parseInt(line[1]);
  //    res = _a + _b;
  //    process.stdout.write(""+res+"\n");
  // }
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