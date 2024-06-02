import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingBar = () => {
  return (
    <div className="loading-bar-container">
      <div className="loading-bar">
        76% Completed
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
                  <LoadingBar />
              <span style={{ cursor: 'pointer' }} onClick={() => navigate('/borrow')}>BORROW</span>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('12 month Vault clicked')}>12 month Vault</span>
          <div>
          <div className="inline-container">
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/deposit')}>DEPOSIT</span>
                  <LoadingBar />
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/borrow')}>BORROW</span>
          </div>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('24 month Vault clicked')}>24 month Vault</span>
          <div>
          <div className="inline-container">
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/deposit')}>DEPOSIT</span>
                 <LoadingBar />
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/borrow')}>BORROW</span>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
