require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember million hover produce bridge tornado'; 
let testAccounts = [
"0xc963a488ae02aa5ecc3db8e4e1fc7bc31c27ffd7b66d0bbdd197d354afcf4985",
"0x5c5f9326c6474c177d337168fdadc97f517dd2e852d00d0c9c1ee2767e594bd1",
"0xc0d2a9f40e97ce2bd195cf24a5d1e3ed36df592914d5a9a3bccd92455b1e99d1",
"0xd1ee8542726cef00dd458cf8dc325a75f01747262cd13862414b66236032443c",
"0xff3ebeacb986e3218a7360300d43917b6320de06811404e5bb2b38adde144655",
"0x91280215c8d088a83eef4af707f1d5e577ac9013847e9b85bda77f0ace2a8470",
"0xd80fa6723131f2a214777c372e1ff5a557247929f32380d2bff6164ceebad7c9",
"0x3223038e044e2185d92383679fa5651f6be3c8b842d4c46c525f674c0226232d",
"0x151c053dc3b0bea740cda73ef3d9145508229b2549140b67d64db62b9ce613f8",
"0x6b09ca9edbc50375e600c5df270f941cd8c22287ca753e88ac145ee3e5135a97"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


