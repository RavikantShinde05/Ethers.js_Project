// This commands is for Ethers.js Version 6.16.0
// Basic operations and commands;
import { ethers } from "ethers";

// to check the Block number or "nonce" on blockchain to check the provider
// is running porperly or not.
const queryBlockchain = async () =>{

    // we need to connect to the blockchain so we need API providers link (mainnet or testnet)
// API Provider are alchemy, infura, etc.
const provider = new ethers.JsonRpcProvider(``);

    const printBlocknumber = await provider.getBlockNumber();
        console.log("the current Block number/Nounce is :",printBlocknumber)
   
// to check the balance of an account
const checkBalance = await provider.getBalance('address of account');
console.log("the accounts Balance in BigNumber :",checkBalance);
 
// the balance should be in BigNumber Object form it should be converted in to ethers.
const balanceEthers = ethers.formatEther(checkBalance); 
// balance is in ethers form. 
console.log("the account balance Ethers : ",balanceEthers);

// to convert the balance in wei or BigNumber object form.
const weiBalance = ethers.parseEther(balanceEthers);
console.log("the account balance in Wei : ",weiBalance);

// now convert the balance form wei to Gwei:
const gweiBalance = ethers.formatUnits(weiBalance);
console.log("the account balance in Gwei : ",gweiBalance);
 };

queryBlockchain();

