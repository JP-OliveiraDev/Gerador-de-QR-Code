import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QrCodeForm from '../components/QrCodeForm';
import QrCodePreview from '../components/QrCodePreview';
import '../styles/custom.css';

const Home = () => {
  const [qrCodeValue, setQrCodeValue] = useState('');

  return (
    <div className="wrapper">
      <Container className="mt-5 main-content">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="home-title">Gerador de QR Code</h1>
            <p className="home-subtitle">
              Crie seu QR Code personalizado de forma rápida e fácil!
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-4">
          <Col md={6} className="order-md-1 order-2">
            <QrCodeForm onGenerate={setQrCodeValue} />
          </Col>
          <Col md={6} className="order-md-2 order-1">
            <QrCodePreview value={qrCodeValue} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
