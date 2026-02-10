import { useState } from "react";

const PaymentPage = () => {
const [fullName , setFullName] = useState("")
const [cardNumber, setCardNumber] = useState(0)
const [expiryDate, setExpiryDate] = useState("")
const [cvv, setCvv] = useState(0)
const [adress, setAdress] = useState("")
const [postalCode, setPostalCode] = useState("")

  return (
    <div>
<form className="form-container">
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
          type="number" placeholder="MM/YY"/>
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

</form>

    </div>
  )
}

export default PaymentPage
