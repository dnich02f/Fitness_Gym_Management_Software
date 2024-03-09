"use client"
import React, { useState } from 'react';

const StaffCreationForm = () => {
 const [formData, setFormData] = useState({
    name: '',
    role: '',
    phoneNumber: '',
    email: '',
    gymId: 1, // Assuming you have a way to select a gym
    user: 1,
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

const handleSubmit = async (e) => {
 e.preventDefault();

 const response = await fetch('http://backend:8000/api/gym_management/staff/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
 });

 if (response.ok) {
    alert('Staff member created successfully');
    // Optionally, redirect or clear the form
 } else {
    alert('Failed to create staff member');
 }
};


 return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Create New Staff Member</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-white">Role:</label>
        <input type="text" name="role" id="role" value={formData.role} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Phone Number:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" />
      </div>
      <div className="mb-4">
        <label htmlFor="gymId" className="block text-sm font-medium text-white">Gym:</label>
        {/* Implement gym selection here */}
      </div>
      <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Staff Member</button>
    </form>
 );
};

export default StaffCreationForm;
