import React, { useRef, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { QRCodeCanvas } from 'qrcode.react';
import '../styles/QrCodePreview.css';

const QrCodePreview = ({ value }) => {
  const qrRef = useRef();
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');

  const handleDownload = () => {
    const qrCanvas = qrRef.current?.querySelector('canvas');
    if (!qrCanvas) return;

    const qrImage = qrCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = qrImage;
    a.download = 'qrcode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Card className="qr-card">
      <Card.Body ref={qrRef} className="qr-body">
        <h5>QR Code Gerado</h5>
        {value ? (
          <>
            <QRCodeCanvas value={value} size={220} bgColor={bgColor} fgColor={fgColor} />
            <div className="qr-controle">
              <div className="controlador-qr">
                <label>Fundo</label>
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
              </div>
              <div className="controlador-qr">
                <label>Código</label>
                <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} />
              </div>
            </div>
            <Button className="download-btn" onClick={handleDownload}>
              Baixar QR Code
            </Button>
          </>
        ) : (
          <p>Digite um texto ou URL para gerar um QR Code.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default QrCodePreview;
