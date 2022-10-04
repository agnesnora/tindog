// Remember to import the data and Dog class!

import Doggy from "./Dog.js";
import dogs from "./data.js";

let currentDogIndex = -1;
let currentDog = new Doggy(dogs[currentDogIndex]);

function getNewDog() {
  currentDogIndex += 1;
  currentDog = new Doggy(dogs[currentDogIndex]);

  if (currentDogIndex <= dogs.length - 1) {
    render();
  } else if (currentDogIndex > dogs.length - 1) {
    currentDog = {};
    setTimeout(
      () =>
        (document.getElementById(
          "dog-card"
        ).innerHTML = `<h2 id="end-message">No more dogs in your area</h2>`),
      3000
    );
  }
}

document.getElementById("btn-like-id").addEventListener("click", getNewDog);
document.getElementById("btn-dislike-id").addEventListener("click", getNewDog);

function render() {
  document.getElementById("dog-card").innerHTML = currentDog.getDogHtml();
}
