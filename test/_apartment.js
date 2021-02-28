const { expect } = require("chai");
const Apartment = require("../src/classes/apartment");
const { isClass } = require("./utilities");

let apartment = null;

describe("Apartment", () => {
  beforeEach(() => {
    apartment = new Apartment();
  });
  describe("Apartment", () => {
    it("should be a class", () => {
      expect(isClass(Apartment)).to.be.true;
    });
  });

  it("should have properties for size and price", () => {
    expect(apartment.hasOwnProperty("size")).to.equal(true);
    expect(apartment.hasOwnProperty("price")).to.equal(true);
  });
});

describe("The marketValue method", () => {
  it("should exist on the Apartment prototype", () => {
    expect(Apartment.prototype.marketValue).to.exist;
  });
});
