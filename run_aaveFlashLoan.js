const aaveFlashLoanABI = require("./build/contracts/MyAaveFlashLoan_v2.json");
const address = require("./addresses");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3'); 

// Connecting to the Ethereum Blockchain 
const web3 = new Web3(new HDWalletProvider(address.key, address.https));

// Connecting to my SmartContract for CompoundTrading
const aaveFlashLoan = new web3.eth.Contract(aaveFlashLoanABI.abi, address.aaveFlashLoan);

const settings = {
    gasLimit: 8000000, 
    gasPrice: web3.utils.toWei('50', 'Gwei'),
    from: address.myAddress
}

async function main() {
    try{
    const flashloan = await aaveFlashLoan.methods.myFlashLoanCall().send(settings);
    console.log("FlashLoan with DAI was succesfull")
    } catch (error) {console.log(error);}
}


main();