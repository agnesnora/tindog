// Create the Dog class here

class Doggy {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, bio, age, hasBeenSwiped, hasBeenLiked } = this;
    return `  <div class = "feature-suggestion">
                  <div id="dog-intro">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
                <img class="dog-img" src = '${avatar}'>
              </div>  
    
  
  `;
  }
  setMatchStatus(bool) {
    hasBeenLiked = true;
    hasBeenSwiped = true;
  }
}

export default Doggy;
