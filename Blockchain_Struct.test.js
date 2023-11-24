const { Blockchain, Block } = require('./Blockchain_Struct.js')

test('Test Case 1', () => {
  
  const myBlockchain = new Blockchain();
  myBlockchain.addBlock(new Block(1, '11/24/2023', { amount: 4 }));
  myBlockchain.addBlock(new Block(2, '11/24/2023', { amount: 8 }));
  
  console.log(JSON.stringify(myBlockchain, null, 2));
  console.log('Is blockchain valid? ' + myBlockchain.isChainValid());
  
  
});








