// console.log('The house always wins!');
let idIn = document.getElementById('idInput');
let setColor = document.getElementById('colorInput');
// console.log(idIn);
// console.log(setColor);

function setCard() {
  const card = document.getElementById(idInput.value);
  //   console.log(card);
  card.style.color = colorInput.value;
}
