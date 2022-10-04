// Remember to import the data and Dog class!

import Doggy from "./Dog.js";
import dogs from "./data.js";

const currentDog = new Doggy(dogs[0]);
currentDog.getDogHtml();

function getNewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Doggy(nextDogData) : {};
}

document.getElementById("btn-like-id").addEventListener("click", getNewDog);

/*const nextMonsterData = characterData[monstersArray.shift()]
return nextMonsterData ? new Character(nextMonsterData) : {} */

function interact() {
  if (dogs.length > 0) {
    dog = getNewDog();
    render();
  }
}

function render() {
  document.getElementById("dog-card").innerHTML = dog.getDogHtml();
}

let dog = getNewDog();

document.getElementById("btn-like-id").addEventListener("click", interact);
