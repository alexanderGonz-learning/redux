import React from 'react'
import logo from '../../logo.svg';
import './Logo.css';


const App = ({ size }) => {
  const styles = {
    height: size ? `${size}vmin`: '10vmin'
  }

  return (
    <img src={logo} className="App-logo" alt="logo"  style={styles} />    
  )
}

export default App