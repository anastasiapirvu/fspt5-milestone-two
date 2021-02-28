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
  constructor(size, material, height, families) {
    this.size = size;
    this.material = material;
    this.height = 0;
    this.families = 200;
  }

  howTallIsIt() {
    let currentHeight = 2 + this.height;
    return currentHeight;
  }

  whoLiveshere() {
    return this.families;
  }
  printInfo() {
    console.log(
      `The current height of the building is ${this.height} meters long.`
    );
  }
}

module.exports = Building;
