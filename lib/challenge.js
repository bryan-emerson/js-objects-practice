let ship = {
  name: 'Millennium Falcon',
  speed: 11,
  crew: ['Han Solo', 'Chewbacca'],
  passengers: [],
  famous: true,
  heardOfIt: function() {
    console.log("You've never heard of the millennium falcon!?");
    this.famous = false;
  },
  addPassenger: function(passenger) {
    this.passengers.push(passenger);
  },
  removePassenger: function(passenger) {
    let index = this.passengers.indexOf(passenger);
    this.passengers.splice(index, 1);
  }
};

// Console log the name

// Change the speed to 13

// Add 2 passengers, "Leia" and "Luke"

// console log whether it's famous or not

// Ask if you've heard of the millenium falcon

// console log if it's still famous

// Remove Leia as a passengers

// Add a new property called "color" and set it equal to "beige"

// Add a new property called "missions" and set it equal to an empty object

// Add 3 properties to "missions"
// kashyyk: true
// "escape-from-asteroid" : "scary"
// "smuggled cargo": ['prisoners', 'stolen goods', 'unobtanium']

// Delete the "famous" property
