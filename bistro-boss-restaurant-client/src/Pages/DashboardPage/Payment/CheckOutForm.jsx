import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import useAuth from '../../../Hooks/useAuth';



const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecretValue, setClientSecretValue] = useState('');
    const axiosSecure = useAxiosSecure();
    const [totalPrice, setTotalPrice] = useState(0);
    const [transaction, setTransaction] = useState('')
    const [cart] = useCart();
    const { user } = useAuth()

    useEffect(() => {
        const price = cart?.data?.reduce((total, item) => {
            return total + item.price;
        }, 0);

        setTotalPrice(price); // Set price once here
    }, [cart?.data]);



    useEffect(() => {
        const payment = async () => {
            try {
                if (!isNaN(totalPrice) && totalPrice > 0) {
                    const res = await axiosSecure.post('/create-payment-intent', { price: totalPrice });
                    console.log('Client Secret:', res.data.clientSecret);
                    setClientSecretValue(res.data.clientSecret)
                }
            } catch (error) {
                console.error('Payment Intent Error:', error);
            }
        };

        payment();
    }, [axiosSecure, totalPrice]);






    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        //Create Payment Method
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


        // confirmCardPayment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecretValue, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('Confirm Payment Error: ', confirmError)
            setError(confirmError.message)
        } else {
            console.log('Confirm Payment: ', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransaction(paymentIntent.id)

                const itemDetails = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    // data: new Data(),
                    cartIds: cart?.data.map(cartId => cartId._id),
                    itemIds: cart?.data.map(item => item.itemId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', itemDetails);
                console.log(res.data)
            }
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
                <button type="submit" className="px-4 py-2 text-white rounded-xl bg-[#D1A054]" disabled={!stripe || !clientSecretValue}>
                    Pay
                </button>

                {
                    error ? <p className='text-red-500 text-center font-inter mt-4'><span>{error}</span></p> : ''

                }

                {
                    transaction ? <p className='text-green-500 text-center font-inter mt-4'>Your transaction id is: {transaction}</p> : ''
                }
            </div>
        </form>
    );
};

export default CheckOutForm;