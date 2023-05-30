import React, { useState } from 'react';

const TablePopup = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div>
    {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-md">
        <table className="w-full">
        <thead>
            <tr>
                <th className="py-2 px-4 border-b">Super Saver</th>
    <th className="py-2 px-4 border-b">Smart</th>
        <th className="py-2 px-4 border-b">Free Soul</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td className="py-2 px-4 border-b">Number of Flight Pass</td>
    <td className="py-2 px-4 border-b">Cabin Bag</td>
    <td className="py-2 px-4 border-b">Check-in Bag</td>
    </tr>
    <tr>
    <td className="py-2 px-4 border-b">Seat Selection</td>
    <td className="py-2 px-4 border-b">Refund Fee</td>
    <td className="py-2 px-4 border-b"></td>
        </tr>
        </tbody>
        </table>
        <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={togglePopup}
            >
            Close
            </button>
            </div>
            </div>
    )}
    </div>
);
};

export default TablePopup;
