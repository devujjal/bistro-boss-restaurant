import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { useState } from 'react';


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error: ', error)
            setError(error.message)
        } else {
            console.log('payment mehod: ', paymentMethod)
            setError('')
        }

    }




    return (
        <form className='w-[60%]' onSubmit={handleSubmit}>
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

            <div className='text-center mt-10'>
                <button type="submit" className="px-4 py-2 text-white rounded-xl bg-[#D1A054]" disabled={!stripe}>
                    Pay
                </button>

                {
                    error ? <p className='text-red-500 text-center font-inter mt-4'><span>{error}</span></p> : ''

                }
            </div>
        </form>
    );
};

export default CheckOutForm;