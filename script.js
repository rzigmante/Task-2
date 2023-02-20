/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const buttonEl = document.getElementById("btn__element");
const buttonStateEl = document.getElementById("btn__state");
let state = 0;

function countPress() {
  state++;
  buttonStateEl.innerHTML = state;
}
buttonEl.addEventListener("click", countPress);
