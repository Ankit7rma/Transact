const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

// Generate a random private key
const privateKey = secp256k1.utils.randomPrivateKey();
const publicKey = secp256k1.getPublicKey(privateKey);
// Convert the private key to hexadecimal for readability
console.log("Private Key (Hex):", toHex(privateKey), "Public Key " + publicKey);
