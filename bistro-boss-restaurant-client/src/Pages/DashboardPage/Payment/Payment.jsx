import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLIC_API_KEY);

const Payment = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="px-6 py-3 md:px-24 md:py-28">
                    <SectionTitle heading={'PAYMENT'} subHeading={'Please pay to eat'} />
                    <div className="flex justify-center">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;