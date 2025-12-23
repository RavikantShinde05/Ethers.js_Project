// Basic operations and commands;

import { ethers } from "ethers";

// we need to connect to the blockchain so we need API providers link (mainnet or testnet)
// API Provider are alchemy, infura, etc.
const provider = new ethers.providers.JsonRpcProvider("window.ethereum/ or https link of infura api provider");

// to check the Block number or "nonce" on blockchain to check the provider
// is running porperly or not.
const queryBlockchain = async () =>{
    const printBlocknumber = await provider.getBlocknumber();
    console.log("the current Block number/Nounce is :",printBlocknumberlocknumber);

// to check the balance of an account
const checkBalance = await provider.getBalance("related address to be checked");
console.log("the accounts Balance is :",checkBalance);
 
// the balance should be in BigNumber Object form it should be converted in to ethers.
const balanceEthers = await ethers.utils.formatEther(checkBalance); 
// balance is in ethers form. 
console.log("the account balance is : ",balanceEthers);

// to convert the balance in wei or BigNumber object form.
const weiBalance = ethers.utils.parseEthers(balanceEthers);
console.log("the account balance is : ",balanceEthers);

};

queryBlockchain();

