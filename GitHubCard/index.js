/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/realwillbrooks", {})
  .then(response => {
    console.log("data", response.data);
  })
 .catch(e => {
   console.log("error", e);
 });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function card (objects){
  // This create card div
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // This creates Images
  var gitImgs = document.createElement("div");
  gitImgs.src= "";
  card.Div.appendChild(gitImgs);

  // This creates info for card div
  var cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info");
  cardDiv.appendChild(cardInfoDiv);

  // H3 for Card Div
  var h3 = document.createElement("div");
  h3.classList.add("name");
  cardInfoDiv.appendChild(h3);

  // GitHub Username Line
  var gitName = document.createElement("p");
  gitName.classList.add("username");
  cardInfoDiv.appendChild(gitName);

  // User's Location
  var userLocation = document.createElement("p");
  cardInfoDiv.appendChild(userLocation);

  // User Profile Link
  var profileLink = document.createElement("p");
  var a = document.createElement("a");
  a.textContent = "";
  a.href = "";
  profileLink.appendChild("a");
  cardInfoDiv.appendChild(profileLink);

  // User's Following Count
  var userFollowing = document.createElement("p");
  cardInfoDiv.appendChild(userFollowing);

  // User's Follower Count
  var userFollowers = document.createElement("p");
  cardInfoDiv.appendChild(userFollowers);

  // User's Bio
  var userBio = document.createElement("p");
  cardInfoDiv.appendChild(userBio);
  
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
