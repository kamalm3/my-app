import React from 'react';
import { useNavigate } from 'react-router-dom';

const BorrowPage = ({ handleClick }) => {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <h2>Pick your vault you want to lend to</h2>
      {/* Add your lending content here */}
        <div>
          <button  className="button-lend" onClick={() => navigate('/borrowselected')}>Select</button>
          <button  className="button-lend" onClick={() => navigate('/borrowselected')}>Select</button>
          <button  className="button-lend" onClick={() => navigate('/borrowselected')}>Select</button>
        </div>
  </header>
  );
};

export default BorrowPage;
