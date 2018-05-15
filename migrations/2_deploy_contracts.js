var Census = artifacts.require("./Census.sol");

module.exports = function(deployer) {
  deployer.deploy(Census, {gas: 700000});
};
