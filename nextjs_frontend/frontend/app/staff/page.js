// frontend/app/staff/page.js
import React from 'react';

// Sample data for staff members
const staffMembers = [
 { name: 'John Doe', role: 'Manager', bio: 'Leading the team with innovation and efficiency.' },
 { name: 'Jane Smith', role: 'Developer', bio: 'Passionate about front-end development, pushing boundaries.' },
 { name: 'Alice Johnson', role: 'Designer', bio: 'Creative force, ensuring designs are both beautiful and functional.' },
 // Add more staff members as needed
];

const StaffPage = () => {
 return (
    <div className="min-h-screen bg-gray-900 text-white py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center mb-8">Staff</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {staffMembers.map((staff, index) => (
              <div key={index} className="flex flex-col items-center justify-center bg-gray-700 p-6 rounded-lg shadow-md">
                <img className="w-24 h-24 mb-4 rounded-full" src="https://via.placeholder.com/150" alt={staff.name} />
                <h2 className="text-xl font-bold text-center">{staff.name}</h2>
                <p className="text-center text-gray-300">{staff.role}</p>
                <p className="text-center text-gray-400 mt-2">{staff.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
 );
};

export default StaffPage;
