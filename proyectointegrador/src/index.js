// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './Estilos/index.css';
// import Menu from './Componentes/HamburgerMenu'; // Este es tu componente de menú
// import Calculadora from './Componentes/Calculadora'; // Este es tu componente de Calculadora
// import Principal from './Componentes/Principal'; // Este es tu componente de Calculadora
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Menu />
//       <Routes>
//         <Route path="/Principal" element={<Principal />} />
//         <Route path="/calculadora" element={<Calculadora />} />
//         <Route path="/" element={<Redirect to="/miPagina" />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Estilos/index.css';
import Menu from './Componentes/HamburgerMenu'; // Componente de menú
import Calculadora from './Componentes/Calculadora'; // Componente de Calculadora
import Principal from './Componentes/Principal';
import About from './Componentes/About';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


