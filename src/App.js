import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LendPage from './Lendpage.js';
import BorrowPage from './Borrowpage.js';
import LendPageselected from './Lendpageselected.js';
import BorrowPageselected from './Borrowpageselected.js';
import HomePage from './Homepage.js';
import DepositPage from './Depositpage.js';
import Web3 from 'web3';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  // Function to handle button clicks
  const handleClick = (buttonName) => {
    alert(`Button ${buttonName} clicked`);
  };

  // Function to connect to Metamask
  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        // Now you can use web3 to interact with the Ethereum blockchain
        // For example, get the user's account:
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        console.log('Connected to Metamask. Current account:', account);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    } else {
      console.error('Metamask not detected');
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">MyApp</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/lend">Lend</Nav.Link>
            <Nav.Link as={Link} to="/borrow">Borrow</Nav.Link>
            <Nav.Link onClick={connectToMetamask}>
              {isConnected ? 'Connected!' : 'Connect Wallet'}
            </Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage handleClick={handleClick} />} />
          <Route path="/lend" element={<LendPage />} />
          <Route path="/lendselected" element={<LendPageselected />} />
          <Route path="/borrowselected" element={<BorrowPageselected />} />
          <Route path="/borrow" element={<BorrowPage />} />
          <Route path="/deposit" element={<DepositPage />} /> 
          {/* Define other routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;