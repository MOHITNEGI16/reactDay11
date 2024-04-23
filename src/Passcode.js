import React, { useState } from 'react';
import './Passcode.css'
const Passcode = () => {
  const [length, setLength] = useState(8);
  const [generatedPasscode, setGeneratedPasscode] = useState('');

  const generatePasscode = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?';
    let passcode = '';
    for (let i = 0; i <length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      passcode += charset[randomIndex];
    }
    setGeneratedPasscode(passcode);
  };

  const handleLengthChange = (e) => {
    const length = parseInt(e.target.value);
    setLength(length);
  };

  return (
    <>
    <h2 className='heading'>Passcode Generator</h2>
    <div className='container'>
      <input
      className='input'
      style={{width:"50%",margin:"auto"}}
        type="number"
        min="9"
        value={length}
        onChange={handleLengthChange}
      />
      <button className='button' style={{width:"40%",margin:"auto"}} onClick={generatePasscode}>Generate Passcode</button>
      <div className='generated-passcode'>
        <p>{generatedPasscode}</p>
    </div>
    </div>
    </>
  );
};

export default Passcode
