import React, { useState } from 'react';

const DamacEventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    gender: '',
    cityCountry: '',
    interestedIn: '',
    interestType: '',
    plannedWindow: '',
    budget: '',
    acceptUpdates: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">DAMAC Property Event Registration</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name *</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Mobile Number *</label>
          <input
            type="tel"
            required
            className="w-full p-2 border rounded"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Gender *</label>
          <div className="flex gap-4">
            {['Male', 'Female', 'Other'].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  required
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="mr-2"
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* City, Country */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">City, Country *</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.cityCountry}
            onChange={(e) => setFormData({...formData, cityCountry: e.target.value})}
          />
        </div>

        {/* Interested In */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Interested In *</label>
          <select
            required
            className="w-full p-2 border rounded"
            value={formData.interestedIn}
            onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}
          >
            <option value="">Select Option</option>
            {['Residential', 'Office', 'Commercial'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Interest Type */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Interest Type *</label>
          <select
            required
            className="w-full p-2 border rounded"
            value={formData.interestType}
            onChange={(e) => setFormData({...formData, interestType: e.target.value})}
          >
            <option value="">Select Option</option>
            {['Investor', 'Self Use', 'Knowledge'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Planned Window */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Planned Window *</label>
          <select
            required
            className="w-full p-2 border rounded"
            value={formData.plannedWindow}
            onChange={(e) => setFormData({...formData, plannedWindow: e.target.value})}
          >
            <option value="">Select Option</option>
            {['within 30 days', 'within 30-60 days', 'within 60-90 days', 'beyond 90 days'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Budget (INR) *</label>
          <select
            required
            className="w-full p-2 border rounded"
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          >
            <option value="">Select Budget Range</option>
            {['50 lakhs - 1 Cr', '1cr to 2 cr', '2cr to 3cr', '3cr and above'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Product Updates Checkbox */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              required
              checked={formData.acceptUpdates}
              onChange={(e) => setFormData({...formData, acceptUpdates: e.target.checked})}
              className="mr-2"
            />
            <span className="text-gray-700">We would like to send product updates and promotions once every 15 days *</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DamacEventForm; 
