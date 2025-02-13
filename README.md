# Gerador de QR Code

O **Gerador de QR Code** é um projeto web que permite aos usuários gerar códigos QR personalizados com facilidade. O sistema oferece uma interface simples para a entrada de texto e, a partir disso, gera um código QR que pode ser visualizado em tempo real. A aplicação é responsiva, compatível com dispositivos móveis e desktop.

## Tecnologias Utilizadas

### **Frontend**

- **React.js** – Construção da interface do usuário.
- **React-Bootstrap** – Componentes estilizados baseados no Bootstrap.
- **CSS** – Estilos personalizados para a aplicação.
- **QRCode.react** – Biblioteca para geração de QR Codes no frontend.

### **Backend**

- **Django** – Framework web em Python para gerenciar o backend.
- **Django REST Framework (DRF)** – API REST para comunicação com o frontend.
- **SQLite** – Banco de dados para armazenamento.
- **CORS Middleware** – Permite o frontend React acessar o backend Django.

### **Arquitetura**

- **Frontend com React**: Utilizando componentes funcionais e hooks para garantir uma gestão eficiente do estado da aplicação e otimizar a reatividade.
- **MVC (Model-View-Controller)**: Estrutura que organiza a aplicação em camadas distintas, facilitando a reutilização de código e melhorando a manutenção e escalabilidade do sistema.
