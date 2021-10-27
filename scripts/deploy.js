// npx hardhat run scripts/deploy.js --network rinkeby
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(                     
    ["Asuna", "King", "Rider"],       // Names
    ["https://i.imgur.com/DKh8Luy.png", // Images
    "https://i.imgur.com/3Xjh2KF.jpg", 
    "https://i.imgur.com/hu6QwT4.jpg"],
    [200, 100, 300],                    // HP values
    [50, 100, 25],                      // Attack damage values          
    "Accelerator", // Boss name
    "https://i.imgur.com/E3Y4V9P.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  
  // let txn;
  // txn = await gameContract.mintCharacterNFT(0);
  // await txn.wait();
  // console.log("Minted NFT #1");

  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  // console.log("Minted NFT #2");

  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  // console.log("Minted NFT #3");

  // console.log("Done deploying and minting!");

  // Test Boss Attack 
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();