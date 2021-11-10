async function main() {
    // We get the contract to deploy
    const NFTContract = await ethers.getContractFactory("NFTContract");
    const nfcmint = await NFTContract.deploy();
  
    console.log("Greeter deployed to:", nfcmint.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });