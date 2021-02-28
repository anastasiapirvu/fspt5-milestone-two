const { expect } = require("chai");
const Building = require("../src/classes/building");
const { isClass } = require("./utilities");

let building = null;

describe("Building", () => {
  beforeEach(() => {
    building = new Building();
  });
  describe("Building", () => {
    it("should be a class", () => {
      expect(isClass(Building)).to.be.true;
    });
    it("should have properties colour, material", () => {
      expect(building.hasOwnProperty("colour")).to.equal(true);
      expect(building.hasOwnProperty("material")).to.equal(true);
    });
  });

  describe("How many families live there", () => {
    it("should exist on the Bulding prototype", () => {
      expect(Building.prototype.whoLiveshere).to.exist;
    });

    it("should return height multiplied by two", () => {
      building.howTallIsIt();
      expect(building.howTallIsIt()).to.equal(building.height * 2);
    });
  });
});
