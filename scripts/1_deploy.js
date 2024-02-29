const hre = require("hardhat");

async function main() {
  
  const Token = await ethers.getContractFactory("Token")
  const token = await Token.deploy('Dapp University', 'DAPPU', '1000000')
  await token.deployed()
  console.log(`Token deplyoyed to: ${token.address}`)

};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
