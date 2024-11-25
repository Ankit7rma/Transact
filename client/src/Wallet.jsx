import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";
import { useState } from "react";
import { toHex } from "ethereum-cryptography/utils";
function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  signature,
  setSignature,
  setMessage,
  message,
}) {
  const [privateKey, setPrivateKey] = useState("");
  const privateKeys = [
    "3a2056c461d4011fc660c04806b90f3097aa183c13d044c0138202155dc1de2c",
    "a8d80f22a1a11a6335dc63a1871cabc5fefeff247bcfcc7929c04d71bf9e8895",
    "4d35a405f13dc7f09e9ee62f1d9fbdafadec52acf468de627a65cbb360a478d2",
  ];

  // Function to create signature
  function createSignature(message) {
    if (!message || !privateKey) {
      console.error("Message or Private Key is missing!");
      return;
    }

    const bytes = utf8ToBytes(message); // Convert message to bytes
    const hash = keccak256(bytes); // Hash the message

    // Sign the hash using secp256k1
    const { r, s, recovery } = secp256k1.sign(hash, privateKey);
    const signature = { r: r.toString("hex"), s: s.toString("hex"), recovery };

    // Send the signature object with the required properties
    setSignature(signature);

    console.log(signature);
    // Check if the signature is valid
    if (signature) {
      console.log("Signature:", signature); // Log the signature (you can also return or display it)

      return signature;
    } else {
      console.error("Failed to create signature");
    }
  }

  async function onChange(evt) {
    const message = evt.target.value;
    setMessage(message);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  async function handlePrivateKeySelect(key) {
    setPrivateKey(key); // Set selected private key
    const address = toHex(secp256k1.getPublicKey(key)); // Generate address from private key
    setAddress(address);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Message
        <input
          placeholder="Type a message to sign"
          value={message}
          onChange={onChange}
        ></input>
      </label>

      <button onClick={() => createSignature(message)}>Create Sign</button>

      <ul>
        {privateKeys.map((key, index) => (
          <li key={index}>
            <button onClick={() => handlePrivateKeySelect(key)}>
              Key {index + 1}
            </button>
            {key.slice(1, 5)}...
          </li>
        ))}
      </ul>

      <div> Address: {address?.slice(1, 10)}...</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
