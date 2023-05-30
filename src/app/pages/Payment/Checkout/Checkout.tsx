import React, { useState } from 'react';

interface PaymentFormProps {
    onSubmit: (data: PaymentFormData) => void;
}

interface PaymentFormData {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<PaymentFormData>({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Payment Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="cardNumber" className="block mb-1">
                        Card Number:
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cardHolder" className="block mb-1">
                        Card Holder:
                    </label>
                    <input
                        type="text"
                        id="cardHolder"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="expiryDate" className="block mb-1">
                        Expiry Date:
                    </label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="cvv" className="block mb-1">
                        CVV:
                    </label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;
