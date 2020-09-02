const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(array) {
  let returnValue = array.find(function (array) {
    return array.result === "W";
  });
  return returnValue ? returnValue.year : undefined;
}
