const MyAaveFlashLoan_v2 = artifacts.require("MyAaveFlashLoan_v2");

module.exports = function (deployer) {
  deployer.deploy(MyAaveFlashLoan_v2);
};