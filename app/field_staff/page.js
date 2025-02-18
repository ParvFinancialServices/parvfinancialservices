'use client'
import React, { useState } from 'react';

const VisitReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    contact: '',
    purpose: '',
    remarks: '',
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Send this data to an API or backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Personal Details */}
      <PersonalDetailsComponent formData={formData} handleChange={handleChange} />

      {/* Visit Details */}
      <VisitDetailsComponent formData={formData} handleChange={handleChange} />

      {/* Location Details */}
      <LocationComponent formData={formData} handleChange={handleChange} />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

// Personal Details Component
const PersonalDetailsComponent = ({ formData, handleChange }) => (
  <div>
    <label htmlFor="name">Name</label>
    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />

    <label htmlFor="date">Date of Visit</label>
    <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />

    <label htmlFor="contact">Contact Details</label>
    <input id="contact" name="contact" type="text" value={formData.contact} onChange={handleChange} />
  </div>
);

// Visit Details Component
const VisitDetailsComponent = ({ formData, handleChange }) => (
  <div>
    <label htmlFor="purpose">Purpose of Visit</label>
    <input id="purpose" name="purpose" type="text" value={formData.purpose} onChange={handleChange} />

    <label htmlFor="remarks">Remarks</label>
    <textarea id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} />
  </div>
);

// Location Details Component
const LocationComponent = ({ formData, handleChange }) => (
  <div>
    <label htmlFor="address">Address</label>
    <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} />

    <label htmlFor="city">City</label>
    <input id="city" name="city" type="text" value={formData.city} onChange={handleChange} />

    <label htmlFor="state">State</label>
    <input id="state" name="state" type="text" value={formData.state} onChange={handleChange} />
  </div>
);

export default VisitReportForm;
