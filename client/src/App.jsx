import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  console.log(signature, "sasa");
  return (
    <div className="app">
      <Wallet
        message={message}
        setMessage={setMessage}
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signature={signature}
        setSignature={setSignature}
      />
      <Transfer
        setBalance={setBalance}
        message={message}
        signature={signature}
      />
    </div>
  );
}

export default App;
