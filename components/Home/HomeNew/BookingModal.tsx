import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Flight } from './Flight';

interface BookingModalProps {
    flight: Flight;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ flight, onClose }) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    const handleBooking = () => {
        // Handle booking confirmation, e.g., send to API or state
        // toast.success('Booking confirmed:', { flight, name, contact });
        onClose(); // Close modal after booking
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Booking Flight</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes />
                    </button>
                </div>
                <div className="mt-4">
                    <p className="font-semibold">{flight.titleName1} to {flight.titleName2}</p>
                    <p className="text-sm text-gray-500">Departure: {flight.titleDate1} at {flight.time1}</p>
                    {flight.type === 'Round Trip' && (
                        <p className="text-sm text-gray-500">Return: {flight.titleDate2} at {flight.time2}</p>
                    )}
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Contact Info</label>
                        <input
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Phone or Email"
                            required
                        />
                    </div>
                    <button
                        onClick={handleBooking}
                        className="w-full mt-5 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
