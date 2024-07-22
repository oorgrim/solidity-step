const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
describe("SimpleStorage contract", function () {
  let SimpleStorage;
  let simpleStorage;

  before(async function () {
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
  });

  it("should set and get the stored data", async function () {
    await simpleStorage.set(71);
    expect(await simpleStorage.get()).to.equal(11);
  });

  it("should update the stored data", async function() {
    await simpleStorage.set(71);
    await simpleStorage.set(100);
    expect(await simpleStorage.get()).to.equal(100);
  });
});