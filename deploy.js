const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'paddle confirm spell either movie edit bonus game van hard glass siege',
  'https://rinkeby.infura.io/v3/4b99b54ed218417aa3371bf079021687'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode })
  .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('contract deployed to', result.options.address);

};

deploy();
