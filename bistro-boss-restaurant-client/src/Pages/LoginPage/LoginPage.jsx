import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './loginPage.css'
import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const LoginPage = () => {

    const captchaRef = useRef(null);
    const [btnDisabled, setBtnDisabled] = useState(false)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleCaptcha = () => {
        const captchaValue = captchaRef.current.value;
        console.log(captchaValue)
        if (validateCaptcha(captchaValue) === true) {
            setBtnDisabled(true)
            toast.success('Captcha match')
        } else {
            setBtnDisabled(false)
            toast.error('Captcha faild')
        }
    }


    return (
        <section>
            <div className="login-bg">
                <div className="container mx-auto">
                    <div className="flex justify-center font-inter items-center min-h-screen md:py-10">
                        <div className="bg-middle-img shadow-custom rounded-lg w-full max-w-4xl flex flex-wrap overflow-hidden">
                            <div className="w-full lg:w-1/2 p-6 flex justify-center items-center">
                                <div>
                                    <img src="https://i.ibb.co.com/dKqg6rn/authentication2-1.png" alt="" className="w-full h-auto" />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Type here" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                                        <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                    </div>

                                    <div>
                                        <label className="block text-gray-600 mb-2">Captcha</label>
                                        <div className="flex items-center space-x-4">
                                            <LoadCanvasTemplate />
                                            <Toaster />
                                        </div>
                                        <input type="text" ref={captchaRef} name="captcha" placeholder="Type here" className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                        <div className='border-2 rounded-md text-center mt-2'>
                                            <button onClick={handleCaptcha} className='w-full'>Validate</button>
                                        </div>
                                    </div>

                                    <div>
                                        <input
                                            disabled={btnDisabled === false}
                                            type="submit" value={"Sign In"} className={`${btnDisabled === false ? 'cursor-not-allowed' : 'cursor-pointer'} w-full bg-[#D1A054B3] text-white font-bold py-2 rounded-lg hover:bg-[#D1A054BD] focus:outline-none focus:ring-2 focus:ring-yellow-400`} />
                                    </div>

                                    <div className="text-center mt-6">
                                        <a href="#" className="text-[#D1A054B3] underline">New here? Create a New Account</a>
                                    </div>
                                </form>
                                <div className="mt-6 text-center">
                                    <p className="text-gray-600 mb-2">Or sign in with</p>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#" className="text-gray-600 hover:text-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.41 2.87 8.19 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.63.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.42.2 2.47.1 2.73.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.94.68 1.9v2.82c0 .27.18.58.69.48 3.97-1.3 6.84-5.08 6.84-9.49 0-5.52-4.5-10-10-10z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-gray-600 hover:text-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.41 2.87 8.19 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.63.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.42.2 2.47.1 2.73.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.94.68 1.9v2.82c0 .27.18.58.69.48 3.97-1.3 6.84-5.08 6.84-9.49 0-5.52-4.5-10-10-10z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;