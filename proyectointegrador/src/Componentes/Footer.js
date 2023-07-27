import React from 'react';

const Footer = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString();

  return (
    <footer>
      <p>Gustavo Rodriguez Garcia</p>
      <p>gustavorodriguez@nscasesores.com</p>
      <p>Fecha: {dateString}</p>
    </footer>
  );
};

export default Footer;