import flockn from 'flockn';

// Create a game instance, no need to store it as a variable
// Using the flockn module is a shorthand for: import Game from 'flockn/game'; new Game(function() { ...
flockn(function() {
  // The logic for the game itself

  // Add a scene to the game
  this.addScene(function() {
    // The logic for this scene

    // Give the scene a name
    this.name = 'myscene';

    // Create a new game object inside the scene
    this.addGameObject(function() {
      // The logic for this game object

      // Set the position for this game object
      this.position.x = 100;
      this.position.y = 100;

      // This game object now holds a label with the text "Hello World"
      this.texture.label.text = 'Hello World';
    });
  });

  // Start the game loop
  // Since only have one scene, we don't need to specify a scene name.
  // In any other case it would be: `this.run('myscene');`
  this.run();

});