// Remember to import the data and Dog class!

import Doggy from "./Dog.js";
import dogs from "./data.js";

let currentDogIndex = -1;
let currentDog = new Doggy(dogs[currentDogIndex]);

currentDog.getDogHtml();

function getNewDog() {
  currentDogIndex += 1;
  currentDog = new Doggy(dogs[currentDogIndex]);
  render();
}

document.getElementById("btn-like-id").addEventListener("click", getNewDog);

/*const nextMonsterData = characterData[monstersArray.shift()]
return nextMonsterData ? new Character(nextMonsterData) : {} */

function interact() {
  if (dogs.length > 0) {
    currentDog = getNewDog();
    render();
  }
}

function render() {
  document.getElementById("dog-card").innerHTML = currentDog.getDogHtml();
}
