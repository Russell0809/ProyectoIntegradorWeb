// import React from 'react';
// import '../Estilos/About.css';

// class Principal extends React.Component {
//   render() {
//     return(
//       <div className='title'>
//          Diseñada por: Gustavo Rodriguez Garcia gustavorodriguez@nscasesores.com
//       </div>
//     );
//   }
// }

// export default Principal;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/About.css'; // Asegúrate de tener este archivo CSS si deseas darle estilo a tu página

class About extends Component {
  render() {
    return (
      <div className="about-page">
        
        <p className="name">GUSTAVO RODRIGUEZ GARCIA</p>
        <Link className="email" href="mailto:gustavorodriguez@nscasesores.com">gustavorodriguez@nscasesores.com</Link>
      </div>
    );
  }
}

export default About;
