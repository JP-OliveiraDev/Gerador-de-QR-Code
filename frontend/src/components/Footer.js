import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top">
          <Col md={12} className="footer-section">
            <h5>Sobre Nós</h5>
            <p>O EasyQR é uma plataforma simples e eficiente para criar QR Codes personalizados.</p>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
            <p>&copy; EasyQR 2025. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
