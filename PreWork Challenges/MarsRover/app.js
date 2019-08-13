/* Elba Chimilio
 * Mars Rover Kata Assignment: NASA has placed its rover in a 10x10 grid.
 * The rover has a direction property with 'N', 'S', 'E', and 'W' coordinates.
 * Program creates: 1) function to turn the rover, 2) function to move the rover forwards or backwards 
 * based on its direction, and 3) a function to receive a list of commands and move based off of those commands.
 */

//DEFAULT rover
var rover = {
  direction: "N",
  position: [0,0],
  name: "Mars Rover"
};

//Gris is a 10x10 array with default positions
var grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

//Function runs a switch-case to determine where the over should
//Be once it turns left
function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
        rover.direction = 'E';
        break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  };
    console.log("Rover Direction: " + rover.direction);
}

//Function runs a switch-case to determine where the over should
//Be once it turns right
function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
        rover.direction = 'S';
        break;
    case 'W':
      rover.direction = 'N';
      break;
  }
    console.log("Rover Direction: "+ rover.direction);
}

//Function runs a switch-case to determine where the over should
//Be once it moves foward by increasing or decreasing the
//Index of the position it is currently at
function moveForward(rover){
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
    console.log("Rover Direction: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

var test = ['f','f','l','l','r']; //test array

//Function assigns array values a command.
//f = moveFoward, l = turnLeft, and r = turnRight
function roverCommands(commands) {
  for (var i = 0 ; i < commands.length; i++) {
    console.log(i);
    switch (commands[i]){
      case 'f':
        moveForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
      break;
    }
 }
}

roverCommands(test);