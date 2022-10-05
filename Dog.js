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

  getLikeOnDogHtml() {
    const { name, avatar, bio, age, hasBeenSwiped, hasBeenLiked } = this;
    return `  
    <div id="like-badge">
                      <img src="images/badge-like.png" alt="green like badge" style="display:block;">
                      </div>
    <div class = "feature-suggestion">
                  <div id="dog-intro">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
                <img class="dog-img" src = '${avatar}'>
              </div>  `;
  }

  getCrossOnDogHtml() {
    const { name, avatar, bio, age, hasBeenSwiped, hasBeenLiked } = this;
    return `  
    <div id="nope-badge">
                      <img src="images/badge-nope.png" alt="red nope badge" style="display:block">
                    </div>
    <div class = "feature-suggestion">
                  <div id="dog-intro">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
                <img class="dog-img" src = '${avatar}'>
              </div>  `;
  }
}

export default Doggy;
