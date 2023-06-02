import './App.css';
import { useState,useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './contextProvider';


function App() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
  console.log(isLoggedIn);
  return (
    <div>
      {isLoggedIn === true ? <Navigate to="/home" /> : <Navigate to="/login" />}
    </div>
  );
}

export default App;
