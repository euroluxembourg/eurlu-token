const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const TetherToken = artifacts.require('TetherToken');



module.exports = async function (deployer) {
  const name = 'EUR Luxembourg';
  const symbol = 'EURLU';
  const decimals = 6;
  const args = [name, symbol, decimals];
  await deployProxy(TetherToken, args, { deployer, initializer: 'initialize' });
};
