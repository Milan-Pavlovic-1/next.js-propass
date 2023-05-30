import React from 'react';

interface ReviewBookingReferenceProps {
    flightPackage: string;
    numberOfPassengers: number;
    category: string;
    price: number;
    reservationName: string;
}

const ReviewBookingReference: React.FC<ReviewBookingReferenceProps> = ({
                                                                           flightPackage,
                                                                           numberOfPassengers,
                                                                           category,
                                                                           price,
                                                                           reservationName,
                                                                       }) => {
    const generateQRCode = () => {
        // Function to generate QR code
        // Implement your own logic or use a library to generate the QR code
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Review Booking Reference</h2>
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
                <p>
                    Reservation Name: <span className="font-bold">{reservationName}</span>
                </p>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-gray-200 p-4 rounded-md">
                    {/* Placeholder for the generated QR code */}
                    <span className="text-center text-gray-500">QR Code</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewBookingReference;
