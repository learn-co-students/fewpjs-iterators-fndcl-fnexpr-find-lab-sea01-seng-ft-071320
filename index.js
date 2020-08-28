const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(games) {
  const win = games.find((game) => game.result === "W");

  return !!win ? win.year : undefined;
}
