/*------------------
You will be equally evaluated on the
quality of tests you write for this!

1. Create a class named Building. (already done for you)
2. Add two properties (your choice) and test them.
3. Add two methods (your choice) and test them.
You should test that they exist and that they work correctly.
You can add as many tests as you see fit.
------------------*/

class Building {
  constructor(colour, material, height, people) {
    this.colour = colour;
    this.material = material;
    this.height = 1;
    this.families = 200;
  }

  howTallIsIt() {
    let currentLenght = 2 * this.height;
    return currentLenght;
  }

  whoLiveshere() {
    return this.families;
  }
}

module.exports = Building;
