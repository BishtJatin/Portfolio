import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

const Body = () => {
  return (
    <div className="w-10/12 mx-auto min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default Body;
