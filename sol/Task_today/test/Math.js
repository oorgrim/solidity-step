const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");

  
  describe("Math contract", function () {
    let MathContract; 
    let math; 
  
    before(async function () {

      MathContract = await ethers.getContractFactory("Math");
      math = await MathContract.deploy(); 
      
    });
  
    it("should add two numbers", async function () {
      expect(await math.add(5, 2)).to.equal(7);
    });
  
    it("should subtract two numbers", async function () {
      expect(await math.sub(5, 2)).to.equal(3);
    });
  
    it("should multiply two numbers", async function () {
      expect(await math.mul(5, 2)).to.equal(10);
    });
  
    it("should divide two numbers", async function () {
      expect(await math.div(5, 2)).to.equal(3);
    });
  });