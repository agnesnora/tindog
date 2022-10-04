// Create the Dog class here

class Doggy {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, bio, age, hasBeenSwiped, hasBeenLiked } = this;
    return `    <div
    id="dog-picture"
    style="background-image: url('${avatar}')"
  > <div id="dog-intro">
    <h1>${name}, ${age}</h1>
    <p>${bio}</p>
  </div>
  
  `;
  }
}

export default Doggy;
