const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "03d7eb125c163475dec82d3783e848646a5168f6ddb856773c01fbcd7d762c3969": 100,
  "024913e15cc92f2a9240b10074f1c2472e14ed44e39fbe2263832bdca410e002f2": 50,
  "02d4430d0a6de6f64b3df27db0f1cb508e7668602bf617587925c0a0f6d6b18b3b": 75,
};

// ### **Key Pair 1**
// **Private Key:**
// `3a2056c461d4011fc660c04806b90f3097aa183c13d044c0138202155dc1de2c`

// **Public Key:**
// `03d7eb125c163475dec82d3783e848646a5168f6ddb856773c01fbcd7d762c3969`

// ---

// ### **Key Pair 2**
// **Private Key:**
// `a8d80f22a1a11a6335dc63a1871cabc5fefeff247bcfcc7929c04d71bf9e8895`

// **Public Key:**
// `024913e15cc92f2a9240b10074f1c2472e14ed44e39fbe2263832bdca410e002f2`

// ---

// ### **Key Pair 3**
// **Private Key:**
// `4d35a405f13dc7f09e9ee62f1d9fbdafadec52acf468de627a65cbb360a478d2`

// **Public Key:**
// `02d4430d0a6de6f64b3df27db0f1cb508e7668602bf617587925c0a0f6d6b18b3b`

// const balances = {
//   "0x1": 100,
//   "0x2": 50,
//   "0x3": 75,
// };

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
