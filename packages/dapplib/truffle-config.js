require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain snake imitate prison flush ten'; 
let testAccounts = [
"0xcc0fbe62521b81dc794acb5bedf165eebf69a02c5a665625614a43250100472d",
"0x7f91430541c8e7890570b4ac1457ea8f8f57900e65ba475a68dc0b366f8a96ec",
"0x6f0024ab1688a8aef5fff1f57264a557bcd826cb0ab76e1f1726337ed750268d",
"0xdb4d06a595058401b240154ce11192777ae6f6f31672fb6aace84ac77eb9ad17",
"0x57b71a8fc5260c4cf51d4a94f8d60ff1af8bb680c1b651a0a7033999f7b79f5d",
"0x08da2af0737c3deaf31617039abd07e1f566a1fbaed1871d9a0cd006abee52af",
"0x8be3931196f5a9694bc5136b173a66a9ff09e7b00315461be58200adec93e7d5",
"0x1d1c690a69548aaf1e9ebf20c4485a0f9fa369c34417239057fc8a10102f6fde",
"0x94183f7d74126f5ee104c00b1977669f6235a87a306713af53d908203414703c",
"0x7c832a1eaf17bdb28477fc3909b765bc57db98e4c2b5386d58b864793f45d57c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

