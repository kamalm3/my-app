import React from 'react';
import { useNavigate } from 'react-router-dom';

const LendPage = ({ handleClick }) => {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <h2>Pick your vault you want to lend to</h2>
      {/* Add your lending content here */}
        <div>
          <button  className="button-lend" onClick={() => navigate('/lendselected')}>6 month vault</button>
          <button  className="button-lend" onClick={() => navigate('/lendselected')}>12 month vault</button>
          <button  className="button-lend" onClick={() => navigate('/lendselected')}>24 month vault</button>
        </div>
  </header>
  );
};

export default LendPage;
