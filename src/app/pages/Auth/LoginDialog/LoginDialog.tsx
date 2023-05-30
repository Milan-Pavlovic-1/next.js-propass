import React, { useState } from 'react';

const LoginDialog = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateForm = () => {
        let isValid = true;

        // Email validation
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            // Perform login logic
            console.log('Login successful!');
            // Reset form fields
            setEmail('');
            setPassword('');
            setEmailError('');
            setPasswordError('');
        }
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full border ${
                            emailError ? 'border-red-500' : 'border-gray-300'
                        } rounded-md p-2`}
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full border ${
                            passwordError ? 'border-red-500' : 'border-gray-300'
                        } rounded-md p-2`}
                    />
                    {passwordError && (
                        <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginDialog;
