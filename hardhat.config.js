require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades')
require('dotenv').config()
//https://eth-sepolia.g.alchemy.com/v2/HIvkRoO-xfND1UTdPSb1eBEAsKsv_yCd
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
