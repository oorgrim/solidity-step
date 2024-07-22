const { 
    time, 
    loadFixture, 
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers"); 
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs"); 
  const { expect } = require("chai"); 
 
   
describe("ComplexStorage", function () { 
    let ComplexStorage; 
    let complexStorage; 
 
    before(async function () { 
        ComplexStorage = await ethers.getContractFactory("ComplexStorage"); 
        complexStorage = await ComplexStorage.deploy(); 
    }); 
 
    it("should add an item and retrieve it", async function () { 
        await complexStorage.addItem("Item 1"); 
 
        const itemId = 0;  
        const item = await complexStorage.getItem(itemId); 
        expect(item.id).to.equal(itemId); 
        expect(item.name).to.equal("Item 1"); 
 
        const owner = await complexStorage.getOwner(itemId); 
        const accounts = await ethers.getSigners(); 
        expect(owner).to.equal(accounts[0].address); 
    }); 
});