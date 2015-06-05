import helloWorld from '../gameobjects/helloWorld';

export default function() {
    // The logic for this scene

    // Give the scene a name
    this.name = 'myscene';

    // Create a new game object inside the scene
    this.addGameObject(helloWorld);
}