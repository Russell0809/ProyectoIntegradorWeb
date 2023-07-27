// import React, { useState } from 'react';
// import '../Estilos/HamburgerMenu.css';

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="hamburger-menu">
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </button>
//       {isOpen && (
//         <nav>
//           <ul>
//             <li><a href="/menu/src/index.js">Inicio</a></li>
//             {/* <li><a href="/menu/src/Componentes/App.js">Calculadora</a></li>
//             <li><a href="/opcion3">Creditos</a></li> */}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import '../Estilos/HamburgerMenu.css'; // Asegúrate de importar tus estilos

// // const HamburgerMenu = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div className="App">
// //       <div className="navBar">
// //         <button className="burger" onClick={() => setIsOpen(!isOpen)}>
// //           ☰
// //         </button>

// //         {isOpen && (
// //           <div className="menu">
// //             <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
// //             <Link to="/formulario" onClick={() => setIsOpen(false)}>Formulario</Link>
// //           </div>
// //         )}
// //       </div>

// //       <h1 className="title">Bienvenido</h1>

// //       {/* Resto de tu aplicación aquí */}
// //     </div>
// //   );
// // }

// // export default HamburgerMenu;

// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import '../Estilos/HamburgerMenu.css';

// // // const HamburgerMenu = () => {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   return (
// // //     <div className="hamburger-menu">
// // //       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
// // //         <div></div>
// // //         <div></div>
// // //         <div></div>
// // //       </button>
// // //       {isOpen && (
// // //         <nav>
// // //           <ul>
// // //             <li><Link to="/">Inicio</Link></li>
// // //             <li><Link to="./Calculadora.js">Calculadora</Link></li>
// // //           </ul>
// // //         </nav>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default HamburgerMenu;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/calculadora">Calculadora</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
