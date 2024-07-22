const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");

describe("ComplexStorage contract", function () {
  let ComplexStorage;
  let complexStorage;
  let owner;

  before(async function () {
    ComplexStorage = await ethers.getContractFactory("ComplexStorage");
    [owner] = await ethers.getSigners();
    complexStorage = await ComplexStorage.deploy();
  });

  it("should add an item", async function () {
    await complexStorage.addItem("Item 1");
    const item = await complexStorage.getItem(0);
    expect(item.id).to.equal(0);
    expect(item.name).to.equal("Item 1");
    expect(await complexStorage.getOwner(0)).to.equal(owner.address);
  });

  it("should add multiple items", async function () {
    await complexStorage.addItem("Item 1");
    await complexStorage.addItem("Item 2");
    await complexStorage.addItem("Item 3");

    const item1 = await complexStorage.getItem(0);
    expect(item1.id).to.equal(0);
    expect(item1.name).to.equal("Item 1");

    const item2 = await complexStorage.getItem(1);
    expect(item2.id).to.equal(1);
    expect(item2.name).to.equal("Item 2");

    const item3 = await complexStorage.getItem(2);
    expect(item3.id).to.equal(2);
    expect(item3.name).to.equal("Item 3");
  });

  it("should throw if item does not exist", async function () {
    await expect(complexStorage.getItem(0)).to.be.revertedWith("Item doesn't exist");
    await complexStorage.addItem("Item 1");
    await expect(complexStorage.getItem(1)).to.be.revertedWith("Item doesn't exist");
  });
});
