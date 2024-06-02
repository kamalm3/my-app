require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://mainnet.infura.io/v3/61a1b98cb4fd4dc9a6a1c5b5c73bfc3d",
      accounts: ["b5b64edf40f9018b3bdf70471d1f66205cf0da5f69a04fcd5645689dbc82e79d"]
    },
    seplia: {
      url: "https://sepolia.infura.io/v3/61a1b98cb4fd4dc9a6a1c5b5c73bfc3d", // Specify the Seplia node URL
      accounts: ["b5b64edf40f9018b3bdf70471d1f66205cf0da5f69a04fcd5645689dbc82e79d"] // Specify your accounts for deployment
    }
  }
};