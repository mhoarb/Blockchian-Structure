const { Blockchain, Block } = require('./Blockchain_Struct.js')

test('Test Case 1', () => {
  
  const myBlockchain = new Blockchain();
  // myBlockchain.addBlock(new Block(20000, '11/24/2023', { amount: 4 }));
  const newBlock = new Block(myBlockchain.chain.length, new Date(),
   myBlockchain.getLatestBlock().transactions);
   
  newBlock.mineBlock();
  myBlockchain.addBlock(newBlock);
  myBlockchain.getLatestBlock().transactions;
  myBlockchain.createTransaction('Alice', 'Bob', 10);
  myBlockchain.createTransaction('Bob', 'Charlie', 5);

  
  console.log(JSON.stringify(myBlockchain, null, 2));
  console.log('Is blockchain valid? ' + myBlockchain.isChainValid());
  
  
});








