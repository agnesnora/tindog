// Remember to import the data and Dog class!

import Doggy from "./Dog.js";
import dogs from "./data.js";

let currentDogIndex = 0;
let currentDog = new Doggy(dogs[currentDogIndex]);
render();
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
        ).innerHTML = `<h2 id="end-message">No more dogs in your area</h2>
        `),
      1000
    );
    setTimeout(() => reset(), 3000);
  }
}

document.getElementById("btn-like-id").addEventListener("click", function () {
  setTimeout(() => getNewDog(), 1000);
  document.getElementById("dog-card").innerHTML = currentDog.getLikeOnDogHtml();
});
document
  .getElementById("btn-dislike-id")
  .addEventListener("click", function () {
    setTimeout(() => getNewDog(), 1000);
    document.getElementById("dog-card").innerHTML =
      currentDog.getCrossOnDogHtml();
  });

function render() {
  document.getElementById("dog-card").innerHTML = currentDog.getDogHtml();
}

function reset() {
  currentDogIndex = -1;
  getNewDog();
}
