import Big from "big.js"

export default function operate(numeroUno, numeroDos, operador){
    // recibe los tres parametros de App en 
    // state = {
    //     total: null,
    //     siguiente: null,
    //     operador: null
    //   }
    
    const uno = Big(numeroUno || "0")
    const dos = Big(numeroDos || (operador === "/" || operador === "x"? "1" : "0"))

    //estos son de la libreria Big
    if(operador === "+") return uno.plus(dos).toString()

    if(operador === "-") return uno.minus(dos).toString()

    if(operador === "x") return uno.times(dos).toString()

    if(operador === "/") if(dos === 0){
            alert("No se puede dividir entre 0")
    } 
    else{
        return uno.div(dos).toString()
    }    
}
