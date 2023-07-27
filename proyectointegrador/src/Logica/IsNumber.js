//si el usuaio introduce (por ahora solo mediante botones) es un numero
export default function isNumber(item){
    return /[0-9]+/.test(item)
}