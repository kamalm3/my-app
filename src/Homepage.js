import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingBar = ({ percentage }) => {
  return (
    <div className="loading-bar-container">
      <div className="loading-bar" style={{ width: `${percentage}%` }}>
        {percentage}% Completed
      </div>
    </div>
  );
};

const HomePage = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <div>
        <span style={{ cursor: 'pointer' }} onClick={() => alert('6 month Vault clicked')}>6 month Vault</span>
        <div className="inline-container">
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/deposit')}>DEPOSIT</span>
          <LoadingBar percentage={76} /> {/* 76% completed */}
          <span style={{ cursor: 'pointer' }} onClick={() => navigate('/borrow')}>BORROW</span>
        </div>
        {/* Repeat similar structure for other options */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('12 month Vault clicked')}>12 month Vault</span>
          <div className="inline-container">
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/deposit')}>DEPOSIT</span>
            <LoadingBar percentage={90} /> {/* 90% completed */}
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/borrow')}>BORROW</span>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('24 month Vault clicked')}>24 month Vault</span>
          <div className="inline-container">
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/deposit')}>DEPOSIT</span>
            <LoadingBar percentage={100} /> {/* 100% completed */}
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/borrow')}>BORROW</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;

