const board = document.getElementById('board');
const cells = Array.from(board.children);
const xClass = 'x';
const oClass = 'o';
let currentClass = xClass;

cells.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const cellIndex = cells.indexOf(cell);
  const currentClass = this.currentClass;

  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    setTimeout(() => {
      alert(`O jogador ${currentClass} ganhou!`);
    }, 100);
  } else if (isBoardFull()) {
    setTimeout(() => {
      alert('Empate!');
    }, 100);
  } else {
    switchClass();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function isBoardFull() {
  return cells.every(cell => {
    return cell.classList.contains(xClass) || cell.classList.contains(oClass);
  });
}

function switchClass() {
  currentClass = currentClass === xClass ? oClass : xClass;
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
