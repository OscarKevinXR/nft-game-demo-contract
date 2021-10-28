// npx hardhat run scripts/deploy.js --network rinkeby
// Contract deployed to: 0x3C2755976C156b0891e9Dd2F194ae9100371520d
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