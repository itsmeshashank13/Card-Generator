// import React from 'react';
import './card.css';
import cardBackImage from './assets/cardBack.png';
import cardFrontImage from './assets/cardFront.png';
import dots from './assets/dots.png';

function Card({cardholderName, cardNumber, expMonth, expYear, cvv, isSubmitted}) {
    return (
        <>
        <div className = {`card ${isSubmitted ? 'show' : ''}`}>
            <img src = {cardFrontImage} alt='front page of credit card'></img>
            <h3 className='cardNo'>{isSubmitted ? cardNumber : '0000 0000 0000 0000'}</h3>
            <div className='pTag'>
                <p id='name'>{isSubmitted ? cardholderName : 'Abinav V'}</p>
                <p id='date'>{isSubmitted ? `${expMonth}/${expYear}` : '00/00'}</p>
            </div>
        </div>
        <img className = {`dot ${isSubmitted ? 'show' : ''}`} src={dots} alt=''></img>
        <div className = {`img ${isSubmitted ? 'show' : ''}`}>
            <p id='cvv'>{isSubmitted ? cvv : '123'}</p>
            <img src={cardBackImage} alt='back page of credit card'></img>
        </div>
        </>
    );
}

export default Card;