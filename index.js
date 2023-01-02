import { countries } from "./countries.js";

// console.log(countries)

const busca = process.argv[2]

console.log(busca)

if(!busca){
    console.log("Faltou o argumento de busca")
}else{

const resultado = countries.filter((countrie)=>{
    return countrie.name.toLowerCase().includes(busca.toLowerCase())
})
console.log(resultado)
}

