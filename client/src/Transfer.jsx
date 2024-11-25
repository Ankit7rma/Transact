import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import server from "./server";

function Transfer({ message, signature, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        signature: {
          r: signature.r,
          s: signature.s,
          recovery: signature.recovery,
        },
        recipient,
        amount: parseInt(sendAmount),
        message,
      });

      setBalance(balance);

      // Show success toast
      toast.success("Transaction successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Clear input fields after success
      setSendAmount("");
      setRecipient("");
    } catch (ex) {
      // Show error toast
      toast.error(`Error: ${ex.response?.data?.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <form className="container transfer" onSubmit={transfer}>
        <h1>Send Transaction</h1>

        <label>
          Send Amount
          <input
            placeholder="1, 2, 3..."
            value={sendAmount}
            onChange={setValue(setSendAmount)}
          ></input>
        </label>

        <label>
          Recipient
          <input
            placeholder="Type an address, for example: 0x2"
            value={recipient}
            onChange={setValue(setRecipient)}
          ></input>
        </label>

        <input type="submit" className="button" value="Transfer" />
      </form>

      <ToastContainer />
    </>
  );
}

export default Transfer;
