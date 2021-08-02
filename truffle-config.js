const HDWalletProvider = require('@truffle/hdwallet-provider');
const { mnemonic, infuraApiKey } = require('./credentials.json');


module.exports = {
  contracts_directory: './contracts',
  contracts_build_directory: './build',
  migrations_directory: './migrations',

  compilers: {
    solc: {
      version: '0.6.2',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraApiKey}`),
      network_id: 1,
      gas: 5500000,
      gasPrice: 30000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      production: true,
    },

    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`),
      network_id: 3,
      gas: 5500000,
      gasPrice: 30000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      production: false,
    },
  },
};
