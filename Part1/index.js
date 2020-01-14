// console.log('hey!');

const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);

  const topL = board[0];
  const topM = board[1];
  const topR = board[2];
  const midL = board[3];
  const midM = board[4];
  const midR = board[5];
  const botL = board[6];
  const botM = board[7];
  const botR = board[8];

  if (topL !== undefined && topL === topM && topL === topR) {
    alert(`${topL} is the winner! :)`);
    return;
  }
  if (midL !== undefined && midL === midM && midL === midR) {
    alert(`${midL} is the winner! :)`);
    return;
  }

  if (botL !== undefined && botL === botM && botL === botR) {
    alert(`${botL} is the winner! :)`);
    return;
  }

  if (topL !== undefined && topL === midL && topL === botL) {
    alert(`${topL} is the winner! :)`);
    return;
  }

  if (topM !== undefined && topM === midM && topM === botM) {
    alert(`${topM} is the winner! :)`);
    return;
  }

  if (topR !== undefined && topR === midR && topR === botR) {
    alert(`${topR} is the winner! :)`);
    return;
  }

  if (topL !== undefined && topL === midM && topL === botR) {
    alert(`${topL} is the winner! :)`);
    return;
  }

  if (topR !== undefined && topR === midM && topR === botL) {
    alert(`${topR} is the winner! :)`);
    return;
  }
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert('GOOD GAME!');
  }
}

const reset = document.getElementById('reset-game');

function resetGame(e) {
  e.window;
}
