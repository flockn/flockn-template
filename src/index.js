import flockn from 'flockn';

import myScene from './scenes/myScene.js';

// Create a game instance, no need to store it as a variable
// Using the flockn module is a shorthand for: import Game from 'flockn/game'; new Game(function() { ...
flockn(function() {
  // The logic for the game itself

  // Add a scene to the game
  this.addScene(myScene);

  // Start the game loop
  // Since only have one scene, we don't need to specify a scene name.
  // In any other case it would be: `this.run('myscene');`
  this.run();

});