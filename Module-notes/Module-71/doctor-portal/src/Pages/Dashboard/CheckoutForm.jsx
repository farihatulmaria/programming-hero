import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        setCardError(error?.message || '');
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <p className='text-error mt-1'>{cardError}</p>
        <button className='my-2 btn-sm mt-4' type="submit" disabled={!stripe}>
            Pay
        </button>
    </form>
    );
};

export default CheckoutForm;
/* disabled={!stripe || !clientSecret || success} */