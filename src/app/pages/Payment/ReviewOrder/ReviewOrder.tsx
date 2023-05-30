import React from 'react';

interface ReviewOrderProps {
    flightPackage: string;
    numberOfPassengers: number;
    category: string;
    price: number;
}

const ReviewOrder: React.FC<ReviewOrderProps> = ({
                                                     flightPackage,
                                                     numberOfPassengers,
                                                     category,
                                                     price,
                                                 }) => {
    return (
        <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Review Order</h2>
            <div className="mb-4">
                <p>
                    Flight Pass Package: <span className="font-bold">{flightPackage}</span>
                </p>
                <p>
                    Number of Passengers: <span className="font-bold">{numberOfPassengers}</span>
                </p>
                <p>
                    Category: <span className="font-bold">{category}</span>
                </p>
                <p>
                    Price: <span className="font-bold">{price}$</span>
                </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Place Order
            </button>
        </div>
    );
};

export default ReviewOrder;
