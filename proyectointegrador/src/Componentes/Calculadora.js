import Display from "../Componentes/Display";
import PanelDeBotones from "../Componentes/PanelDeBotones";
import { Component } from "react";
import operaciones from "../Logica/Operaciones";
import "../Estilos/Calculadora.css"
import Footer from '../Componentes/Footer';

class Calculadora extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null,
  }
    
  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))
  
  render() {
     return (
      <div className="component-app">
        <div className="calculator">
          <Display value={this.state.siguiente || this.state.total || "0"} />
          <PanelDeBotones clickHandle={this.handleClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calculadora;
