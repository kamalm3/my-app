import React, { useState } from 'react';

const KYCForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    identityType: '',
    identityNumber: '',
    identificationDocument: null, // To store the uploaded file
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      identificationDocument: file
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the form data, such as submitting it to a server
    console.log(formData);
  };

  return (
    <div>
      <h2>KYC Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Identity Type:</label>
          <select name="identityType" value={formData.identityType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="passport">Passport</option>
            <option value="driverLicense">Driver's License</option>
            <option value="nationalID">National ID</option>
          </select>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Identity Number:</label>
          <input type="text" name="identityNumber" value={formData.identityNumber} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>Upload Identification Document:</label>
          <input type="file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default KYCForm;

