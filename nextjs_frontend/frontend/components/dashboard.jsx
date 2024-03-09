"use client"
import React from 'react';

const Dashboard = () => {
 // Fetch data from your backend (e.g., using useEffect and fetch API)
 // For this example, we'll use static data
 const totalClients = 100;
 const membershipTypes = [
    { name: 'Basic', count: 50 },
    { name: 'Premium', count: 30 },
    { name: 'Unlimited', count: 20 },
 ];
 const expiringMemberships = [
    { client: 'John Doe', endDate: '2023-04-30' },
    // More expiring memberships...
 ];

 // Adjusted data for the Membership Growth chart
 const membershipGrowthData = [
 { name: 'January', count: 10 },
 { name: 'February', count: 20 },
 { name: 'March', count: 30 },
 { name: 'April', count: 40 },
 { name: 'May', count: 50 },
];

 return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Gym Management Dashboard</h1>
        {/* Navigation links */}
      </header>
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Total Clients</h2>
          <p className="text-4xl font-semibold">{totalClients}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Membership Types</h2>
          {membershipTypes.map((type) => (
            <div key={type.name} className="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold">{type.name}</h3>
              <p>Count: {type.count}</p>
            </div>
          ))}
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Expiring Memberships</h2>
          {expiringMemberships.map((membership) => (
            <div key={membership.client} className="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold">{membership.client}</h3>
              <p>End Date: {membership.endDate}</p>
            </div>
          ))}
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Membership Growth</h2>
            <div className="bg-gray-700 p-4 rounded-lg">
                <p>Chart goes here</p>
            </div>
        </section>
          <section>
              <h2 className="text-xl font-bold mb-4">Calendar</h2>
          {/* Placeholder for Calendar */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <p>Calendar goes here</p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        {/* Footer content */}
      </footer>
    </div>
 );
};

export default Dashboard;
