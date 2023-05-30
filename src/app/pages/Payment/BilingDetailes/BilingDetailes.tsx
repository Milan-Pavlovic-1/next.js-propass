import React, { useState } from 'react';

interface BillingDetailsProps {
    onSubmit: (data: BillingFormData) => void;
}

interface BillingFormData {
    fullName: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
}

const BillingDetails: React.FC<BillingDetailsProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<BillingFormData>({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
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
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block mb-1">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block mb-1">
                        City:
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="postalCode" className="block mb-1">
                        Postal Code:
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
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

export default BillingDetails;
