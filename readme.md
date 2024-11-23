# ECDSA Node Project

## Overview

This project is a simplified implementation of a blockchain-like system with a centralized server, focusing on **digital signatures** and **public key cryptography**. It ensures secure account balance management and transaction transfers using the **Elliptic Curve Digital Signature Algorithm (ECDSA)**.

The project includes:

- A React-based front-end for user interaction.
- A Node.js server for handling secure transactions.

---

## Features

1. **Secure Transactions**: Transfers are secured with digital signatures.
2. **Account Ownership Verification**: Only the wallet owner with the private key can authorize a transaction.
3. **Replay Attack Prevention**: Implemented measures to prevent replay attacks by ensuring transaction uniqueness.
4. **Public Key Cryptography**: Transactions are validated using the sender's public key derived from the signature.

---

## Project Structure

- **Client**: A React front-end for users to view balances and initiate transfers.
- **Server**: A Node.js server that validates and processes transactions.

---

## Requirements Implemented

- **Digital Signature Integration**: Transactions require valid signatures tied to the private key of the sender.
- **Ownership Verification**: The server ensures that only the account owner can transfer funds.
- **Security Considerations**: Replay attacks are mitigated, and transaction data is validated thoroughly.

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher recommended)
- A package manager like `npm` or `yarn`

### Steps

1. Clone the repository:
   ```bash
   git clone git@github.com:alchemyplatform/ecdsa-node.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecdsa-node
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server/index.js
   ```
5. Start the client:
   ```bash
   npm run start
   ```

Make sure the server and client are running simultaneously in separate terminal processes.

---

## Usage

### Predefined Wallets

Three predefined wallet addresses and their balances are available in `server/index.js`.  
You can use these wallets to test the transaction process.

### Workflow

1. **View Balances**:
   - The left-hand side of the UI shows the connected wallet's address and balance.
2. **Initiate Transfers**:
   - Enter the recipient's wallet address and the amount to transfer.
   - Sign the transaction using your private key.
3. **Validate Transactions**:
   - The server verifies the signature and processes the transfer.

---

## Security Features

1. **Digital Signatures**: Ensures that only the private key owner can authorize a transaction.
2. **Public Key Recovery**: Verifies the signature by deriving the public key.
3. **Replay Protection**: Prevents duplicate transactions by validating transaction uniqueness.

---

## Key Concepts Used

- **ECDSA**: Used for creating and verifying digital signatures.
- **Public/Private Key Pair**: Tied to wallet ownership and transaction security.
- **Cryptographic Hashing**: Ensures data integrity.

---

## Enhancements Implemented

1. **Signature Validation**:
   - Implemented using the Ethereum Cryptography library.
   - Ensures only valid signatures can initiate transfers.
2. **Replay Attack Mitigation**:
   - Added checks for transaction uniqueness using nonces or timestamps.
3. **Improved UI**:
   - Intuitive design for balance display and transaction input.

---

## Future Improvements

1. **Decentralization**:
   - Extend the project to work across multiple servers or nodes.
2. **Encryption**:
   - Secure sensitive data transmitted between client and server.
3. **Multi-Signature Wallets**:
   - Add support for multi-signature transactions for added security.

---

## Feedback and Contributions

Feel free to contribute to this project or report issues via [GitHub](https://github.com/alchemyplatform/ecdsa-node).

Happy Coding! 🚀
