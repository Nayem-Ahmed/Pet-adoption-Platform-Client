import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../Providers/AuthProviders';
import axiosPublic from '../Hooks/axiosPublic';
import { toast } from 'react-toastify';

const AdoptModal = ({ isOpen, onRequestClose,petListing }) => {
    const {user} = useContext (AuthContext)
    // Define state for form inputs
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // You can handle form submission logic here
        console.log("Submitted data:", {name: user?.displayName, email: user?.email, phone, address });
        const adoptionData = {
            name: user?.displayName,
            email: user?.email,
            phone,
            address,
          };
        axiosPublic.post("/adoption",adoptionData)
        .then((response) => {
            console.log("Adoption request submitted successfully:", response.data);
            setPhone('');
            setAddress('');
            toast.success("Adoption request submitted successfully!");
        })
        .catch((error) => {
            console.error("Error submitting adoption request:", error);
        })

        // Close the modal after submission
        onRequestClose();
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Adoption Form Modal"
        >
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <label className="block mb-4">
                    <span className="text-gray-700">User Name:</span>
                    <input type="text"  defaultValue={user?.displayName} disabled className="form-input mt-1 block w-full" />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Email:</span>
                    <input type="email"   defaultValue={user?.email} disabled className="form-input mt-1 block w-full" />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Phone Number:</span>
                    <input
                        type="tel"
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="form-input border mt-1 block w-full"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Address:</span>
                    <input
                        type="text"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                        className="form-input border mt-1 block w-full"
                    />
                </label>

                <button type="submit" className="btn bg-[#30336b] text-white px-4 py-2">
                    Submit
                </button>
            </form>

        </Modal>
    );
};

export default AdoptModal;