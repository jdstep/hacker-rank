

function getNums(array, index) {
  index = index || 0;
  var result = array.split('\n')[index].split(' ').map(function(numberStr) { return parseInt(numberStr);});
  return result;
}

var storage = {};

var coinChange = function(sum, coins, coinIndex) {
  var currentCoin;
  var currentSum;
  var currentNumWays = 0;

  currentCoin = coins[coinIndex];

  currentSum = sum - currentCoin;

  if (coinIndex >= coins.length || 
      currentSum < 0) {
    return 0;
  }

  if (currentSum === 0) {
    return 1;
  }

  if (storage[sum]) {
    return storage[sum];
  }

  currentNumWays += coinChange(sum, coins, coinIndex+1)

  currentNumWays += coinChange(currentSum, coins, coinIndex);

  storage[sum] = currentNumWays;
  
  return currentNumWays;

}
