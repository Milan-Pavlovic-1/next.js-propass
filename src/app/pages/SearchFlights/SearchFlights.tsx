import React, { useState } from 'react';

const FlightSearch = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [flightClass, setFlightClass] = useState('economy');
    const [passengerCount, setPassengerCount] = useState(1);

    const handleSearch = () => {
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Flight Search</h2>
            <div className="mb-4">
                <label className="block mb-1">From:</label>
                <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">To:</label>
                <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Class:</label>
                <select
                    value={flightClass}
                    onChange={(e) => setFlightClass(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                >
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-1">Passengers:</label>
                <input
                    type="number"
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(Number(e.target.value))}
                    min={1}
                    className="w-full border border-gray-300 rounded-md p-2"
                />
            </div>
            <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Search Flights
            </button>
        </div>
    );
};

export default FlightSearch;
