import { countries } from "./countries.js";

const name = process.argv[2]
const code = process.argv[3]

console.log(name)
console.log(code)

if(!name || !code){
    console.log("Faltou o nome ou código do pais")
}else{
    const novoPais ={name,code,}
    countries.push(novoPais)
    console.log(countries[countries.length -1])
}
