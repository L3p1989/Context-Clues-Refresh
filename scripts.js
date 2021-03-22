//array of friends
var friends = ["Glenn", "Julius", "Carissa", "Siacca", "Andi"];
//Array of locations
var locations = [
  "Living Room",
  "Bathroom",
  "Bedroom",
  "Hallway",
  "Stair Case",
  "Entry Way",
  "Kitchen",
  "Dining Room",
  "Pantry",
  "Basement",
];
//array of objects
var objects = [
  "Icepick",
  "cat",
  "tuna fish",
  "belt sander",
  "industrial floor polisher",
  "gun",
  "knife",
  "poison",
  "banana",
  "sword fish",
  "cheese wheel",
  "chandelier",
  "cork screw",
  "pencil",
  "pencil",
  "tea cup",
  "pudding",
  "rope",
  "potato pealer",
  "french horn",
];
//number tracker for h3
var h3Num = 1;
//grab body
var body = document.body;
//when body loads run function
body.onload = function () {
  //i is 0, while i is less than 100, add 1 to i
  for (i = 0; i < 100; i++) {
    //create variable for h3
    var h3 = document.createElement("h3");
    //create text node for h3
    var h3Text = document.createTextNode(`Accusation ${h3Num}`);
    //insert text into h3
    h3.appendChild(h3Text);
    //insert h3 into body
    body.appendChild(h3);
    //add 1 to h3Num
    h3Num++;
    //call addClick with i
    addClick(i);
    //create function addClick
    function addClick(i) {
      //get element h3 referenced by i and add click event listener
      return document
        .getElementsByTagName("h3")
        [i].addEventListener("click", function () {
          //alert with text using friends/locations/objects array indexed with i modulus length of array
          alert(
            `it was ${friends[i % friends.length]}, in the ${
              locations[i % locations.length]
            }, with the ${objects[i % objects.length]}!`
          );
        });
    }
  }
};
