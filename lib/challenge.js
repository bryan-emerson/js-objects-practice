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
console.log(ship.name);

// Change the speed to 13
ship.speed = 13;

// Add 2 passengers, "Leia" and "Luke"
ship.passengers.push("Leia", "Luke");
console.log(ship.passengers);

// console log whether it's famous or not
console.log(ship.famous);

// Ask if you've heard of the millenium falcon
console.log(ship.heardOfIt());

// console log if it's still famous
console.log(ship.heardOfIt); // not finished

// Remove Leia as a passengers
ship.removePassenger("Leia");
console.log(ship.passengers);
// Add a new property called "color" and set it equal to "beige"
ship.color = "beige";
console.log(ship.color);

// Add a new property called "missions" and set it equal to an empty object
ship.missions = {};
console.log(ship.missions);

// Add 3 properties to "missions"
// kashyyk: true
// "escape-from-asteroid" : "scary"
// "smuggled cargo": ['prisoners', 'stolen goods', 'unobtanium']

ship.missions.kashyyk = true;
ship.missions["escape-from-asteroid"] = "scary";
ship.missions["smuggled cargo"] = ['prisoners', 'stolen goods', 'unobtanium'];
console.log(ship.missions);