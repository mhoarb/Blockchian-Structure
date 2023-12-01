const { Blockchain, Block } = require('./Blockchain_Struct.js')

test('Test Case 1', () => {
  
  const myBlockchain = new Blockchain();
  myBlockchain.addBlock(new Block(20000, '11/24/2023', { amount: 4 }));
  
  console.log(JSON.stringify(myBlockchain, null, 2));
  console.log('Is blockchain valid? ' + myBlockchain.isChainValid());
  
  
});








