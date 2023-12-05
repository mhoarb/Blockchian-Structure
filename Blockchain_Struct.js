const SHA256 = require('crypto-js/sha256');

class Transaction {
    constructor(sender, recipient, amount) {
    this.sender = sender;
    this.recipient = recipient;
    this.amount = amount;
  }
}



class Block {
  constructor(index, timestamp, data, previousHash = '', difficulty = 3 , transactions= []) {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.data = data;
    this.previousHash = previousHash;
    this.difficulty = difficulty; 
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.index +
      this.timestamp +
      JSON.stringify(this.data) +
      JSON.stringify(this.transactions) +
      this.previousHash +
      this.nonce
    ).toString();
  }

  mineBlock() {
    while (this.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash}`);
  }
}
//edit this to easyer 

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }
  createTransaction(sender, recipient, amount) {
    const transaction = new Transaction(sender, recipient, amount);
    this.getLatestBlock().transactions.push(transaction);
  }

  createGenesisBlock() {
    return new Block(0, '11/24/2023', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(); // Mine the block before adding to the chain
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = { Blockchain, Block };
