const { expect } = require("chai");

describe("My", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    it("Check greatings ", async function() {
      const My = await ethers.getCntractFactory
      const myContract = await My.deploy();
  
      expect(await myContract.hello("Alua")).to.equal("Hello Alua");
    })
  });