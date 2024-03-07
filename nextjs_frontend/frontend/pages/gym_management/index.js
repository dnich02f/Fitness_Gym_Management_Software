// pages/gym_management/index.js
import React from 'react';

const GymManagementIndex = ({ gyms }) => {
 return (
    <div>
      <h1>Gym Management</h1>
      {gyms.map((gym) => (
        <div key={gym.id}>
          <h2>{gym.name}</h2>
          <p>Address: {gym.address}</p>
          <p>Owner: {gym.owner}</p>
          <p>Phone Number: {gym.phone_number}</p>
          <p>Email: {gym.email}</p>
          <p>Created At: {gym.created_at}</p>
        </div>
      ))}
    </div>
 );
};

export async function getServerSideProps() {
 // Define the URLs to try fetching from
 const urls = [
   'http://backend:8000/api/gym_management/gyms/',
 ];

 let gyms = [];
 let fetchSuccess = false;

 // Try fetching from each URL until successful
 for (const url of urls) {
   try {
     const response = await fetch(url);
     if (response.ok) {
       gyms = await response.json();
       fetchSuccess = true;
       break; // Exit the loop if fetch is successful
     }
   } catch (error) {
     console.error(`Failed to fetch from ${url}:`, error);
   }
 }

 // If fetching failed, use the static list of gyms
 if (!fetchSuccess) {
   console.error('Failed to fetch gyms data from any URL. Using static data.');
   gyms = [
     {
       id: 1,
       name: 'Gym A',
       address: '123 Main St',
       owner: 'John Doe',
       phone_number: '555-1234',
       email: 'john@example.com',
       created_at: '2023-04-01',
     },
     {
       id: 2,
       name: 'Gym B',
       address: '456 Elm St',
       owner: 'Jane Smith',
       phone_number: '555-5678',
       email: 'jane@example.com',
       created_at: '2023-04-02',
     },
   ];
 }

 return {
    props: {
      gyms,
    },
 };
}

export default GymManagementIndex;
