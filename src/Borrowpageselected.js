import React, { useState } from 'react';

const BorrowPageselected = () => {
  const [formData, setFormData] = useState({
    amount: '',
    repaymentPeriod: '',
    collateralAsset: '',
    termsConfirmation: false,
    termsText: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const handleSubmit = () => {
    // Here you can perform actions with the form data, such as submitting it to a server
    console.log(formData);
  };

  return (
    <div>
      <p>
        Select amount to borrow from Vault: <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
      </p>
      <br />
      <p>
        Select time period for repayment: <input type="text" name="repaymentPeriod" value={formData.repaymentPeriod} onChange={handleChange} />
      </p>
      <br />
      <p>
        Asset to be used as collateral: <input type="text" name="collateralAsset" value={formData.collateralAsset} onChange={handleChange} />
      </p>
      <br />
      <p>
        <input type="checkbox" name="termsConfirmation" checked={formData.termsConfirmation} onChange={handleChange} />
        Confirmation of terms and conditions
      </p>
      <div>
        <br />
        <button onClick={handleSubmit} disabled={!formData.termsConfirmation}>Submit</button>
      </div>
    </div>
  );
};

export default BorrowPageselected;
