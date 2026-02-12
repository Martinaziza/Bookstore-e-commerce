import { useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const PaymentPage = () => {
  const { setCart } = useContext(CartContext);
const [fullName , setFullName] = useState("")
const [cardNumber, setCardNumber] = useState(0)
const [expiryDate, setExpiryDate] = useState("")
const [cvv, setCvv] = useState(0)
const [adress, setAdress] = useState("")
const [postalCode, setPostalCode] = useState("")
const nav = useNavigate()


const handleSubmit = (e) => {
  e.preventDefault();
toast.success("Payment Successful!") 

setCart([]); // set the cart items to an empty array

setTimeout(() => {
  nav("/");
}, 1200)
}


  return (
    <div>
<form className="form-container" onSubmit={handleSubmit}>
     <label>
          Full name:
          <input 
          value={fullName}
          onChange={(e) => {
              setFullName(e.target.value);
            }}
          type="text" />
        </label>


         <label>
        Card Number:
          <input 
          value={cardNumber}
          onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          type="number" />
        </label>


         <label>
        Expiry Date:
          <input 
          value={expiryDate}
          onChange={(e) => {
              setExpiryDate(e.target.value);
            }}
          type="text" placeholder="MM/YY"/>
        </label>


         <label>
          CVV Code:
          <input 
          value={cvv}
          onChange={(e) => {
              setCvv(e.target.value);
            }}
          type="number"/>
        </label>


         <label>
          Adress:
          <input 
          value={adress}
          onChange={(e) => {
              setAdress(e.target.value);
            }}
          type="text"/>
        </label>


         <label>
          Postal Code:
          <input 
          value={postalCode}
          onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          type="text"/>
        </label>

        <button className="pay-button">Pay</button>
        <Toaster />

</form>

    </div>
  )
}

export default PaymentPage
