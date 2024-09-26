const { ethers, upgrades } = require('hardhat');

async function main () {
  const Box = await ethers.getContractFactory('Box');
 
  const proxyContract = await upgrades.deployProxy(Box, [768], {
    initializer: "setValue"
  });

  await proxyContract.waitForDeployment();

  const proxyContractAddress = await proxyContract.getAddress();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyContractAddress);
  const adminAddress = await upgrades.erc1967.getAdminAddress(proxyContractAddress);

  console.log("Proxy contract address:",proxyContractAddress)
  console.log("Implementation contract address:", implementationAddress);
  console.log("Admin contract address:", adminAddress);
}

// Execute the main function and catch any errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// Proxy contract address: 0xCA0Cb0Fc88Fc55e21f572787E87341a57C5Db332
// Implementation contract address: 0xA61409D4D272EF045DeEcBFD7aFa4bd0Fb20B01f
// Admin contract address: 0xc5718198f944451eA351EC92430E129DfbE7B329

