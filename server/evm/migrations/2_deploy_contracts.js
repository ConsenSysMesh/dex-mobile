var SafeAddSub = artifacts.require("./SafeAddSub.sol");
var Token = artifacts.require("./Token.sol")

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  deployer.deploy(SafeAddSub)
  deployer.link(SafeAddSub, Token)
  deployer.deploy(Token)
};
