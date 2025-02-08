import React, { useState } from 'react';
import '../styles/QrCodeForm.css';

const QrCodeForm = ({ onGenerate }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    onGenerate(e.target.value);
  };

  const handleClear = () => {
    setText('');
    onGenerate('');
  };

  return (
    <div className="qr-form-container">
      <h2>Gerador de QR Code</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite o link ou texto"
          value={text}
          onChange={handleChange}
          className="qr-input"
        />
        {text && <button className="clear-btn" onClick={handleClear}>×</button>}
      </div>
    </div>
  );
};

export default QrCodeForm;
