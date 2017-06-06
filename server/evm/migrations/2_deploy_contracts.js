var Promise = require('bluebird')
var SafeAddSub = artifacts.require("./SafeAddSub.sol");
var Token = artifacts.require("./Token.sol")

const tokens = [
  {
    name: 'Gnosis',
    ticker: 'GNO',
  },
  {
    name: 'Brave',
    ticker: 'BAT',
  },
  {
    name: 'Golem',
    ticker: 'GNT',
  },
  {
    name: 'Steemit',
    ticker: 'STEEM',
  }
]
module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  return new Promise((resolve, reject) => {
    return Promise.delay(0)
    .then(() => {
      return deployer.deploy(SafeAddSub)
    }).then(() => {
      deployer.link(SafeAddSub, Token)
      return tokens
    }).map((token) => {
      console.log('token')
      // return token.new()
    })
  })
  // deployer.link(SafeAddSub, Token)
  // deployer.deploy(Token)
};
