// npx hardhat run scripts/run.js
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
  // // We only have three characters.
  // // an NFT w/ the character at index 2 of our array.
  // txn = await gameContract.mintCharacterNFT(2);
  // await txn.wait();
  
  // // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);

  // Test Boss Attack 
  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
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