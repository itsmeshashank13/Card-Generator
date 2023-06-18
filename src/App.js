import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setCardholderName(e.target.cardholderName.value);
    setCardNumber(e.target.cardNumber.value);
    setExpMonth(e.target.month.value);
    setExpYear(e.target.year.value);
    setCVV(e.target.cvv.value);
    setIsSubmitted(true);
  };


  return (
    <>
    <div className="App">
      <div className="formContainer">
        <form onSubmit = {handleSubmit}>
          <label htmlFor='cardholderName'>CARDHOLDER NAME</label>
          <input 
          type="text" 
          name="cardholderName" 
          placeholder='e.g. Abinav V' 
          value={cardholderName} 
          onChange={(e) => setCardholderName(e.target.value)} 
          required 
          />
          
          <label htmlFor='cardNumber'>CARD NUMBER</label>
          <input 
            type="text" 
            name="cardNumber" 
            placeholder='e.g. 1234 5678 9123 0000' 
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)} 
            minLength="16"
            maxLength="16" 
            required 
          />
          
          <div className="formRow">
            <div className="formColumn">
              <label htmlFor='expDate'>EXP. DATE (MM/YY)</label>
              <div className="dateInput">
                <input 
                  className="space" 
                  type="number" 
                  name="month" 
                  placeholder='MM'
                  value={expMonth} 
                  onChange={(e) => setExpMonth(e.target.value)} 
                  min="01" 
                  max="12" 
                  maxLength="2" 
                  required 
                />

                <input 
                  className="space" 
                  type="number" 
                  name="year" 
                  placeholder='YY'
                  value={expYear} 
                  onChange={(e) => setExpYear(e.target.value)} 
                  min="00" 
                  max="99" 
                  maxLength="2" 
                  required 
                />
              </div>
            </div>
            <div className="formColumn">
              <label>CVV</label>
              <input 
                type="number" 
                name="cvv" 
                placeholder='e.g. 123' 
                value={cvv} 
                onChange={(e) => setCVV(e.target.value)} 
                min="0" 
                max="999" 
                maxLength="3" 
                required 
              />
            </div>
          </div>

          <button className='btn'>Confirm</button>
        </form>
      </div>
    </div>

    <div className="cardContainer">
      <Card 
      cardholderName = {cardholderName}
      cardNumber = {cardNumber}
      expMonth = {expMonth}
      expYear = {expYear}
      cvv = {cvv}
      isSubmitted={isSubmitted}
      />
    </div>
    </>
  ); 
}

export default App;
