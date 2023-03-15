import { personajesPrincipales  ,ordenAlfabetico, imagenesordenadasAlreves , filtrarEspecies, traerBuscado} from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const dataCompleta = data.results

const contenedorGeneral = document.getElementById('contenedor-general')
const personajesPrincipal= personajesPrincipales(dataCompleta);

const pintar = (data) => {
  //console.log('ver la data: ')
  let template = "";
  for (const species of data) {
    template += `
    <div class="personajeImagen">
      <div class="personajesImagenes">
        <img class="imagenPersonaje" src=${species.image} >
        <p id="texto">${species.name}</p> 
    </div> 
    </div>`;
  }
  contenedorGeneral.innerHTML = template;
}
//console.log(pintar)


//Se pasa el argumento de los personajes principales
pintar(personajesPrincipal)


const traerDocumento= document.getElementById("personajes");
traerDocumento.addEventListener("click", ()=>{
  const cambio= document.getElementById("personajes").value ;
  if(cambio === "De la A a la Z"){
    const ordenadosAlfabeticamente = ordenAlfabetico(dataCompleta);
    pintar(ordenadosAlfabeticamente)
  }else if(cambio === "De la Z a la A")
  {
    const voltearImagenes= imagenesordenadasAlreves(dataCompleta);
    pintar(voltearImagenes)
  }}
)

const traerSelect= document.getElementById("especies");
traerSelect.addEventListener("click", ()=>{
  const cambio= document.getElementById("especies").value ;
  if(cambio === cambio){
    const resultadoFiltrado = filtrarEspecies(dataCompleta, cambio)
    pintar(resultadoFiltrado)
  }else{
    pintar(personajesPrincipal)
  }})

const buscador=document.getElementById('texto');
const boton= document.getElementById('btnbuscar');

const filtrar= () =>{
// console.log(buscador.value);
  const texto = buscador.value.toLowerCase();
  const imprimir = traerBuscado(dataCompleta, texto ) 
  pintar(imprimir)
}

boton.addEventListener('click', filtrar);
buscador.addEventListener('keyup', filtrar)








//*const generoTotal= () =>{ for( let genero of dataCompleta){
//genero = genero.gender
//}}

//const genero = dataCompleta.filter(dataCompleta => dataCompleta.gender === "Female");
//console.log(genero)
//const generoMasculino = dataCompleta.filter(dataCompleta => dataCompleta.gender === "Male");
//console.log(generoMasculino)
//const generoDesconocido = dataCompleta.filter(dataCompleta => dataCompleta.gender === "unknown");
//console.log(generoDesconocido)
//const generoGender = dataCompleta.filter(dataCompleta => dataCompleta.gender === "Genderless");
//console.log(generoGender)

//console.log(ordenar);


//console.log(especies);

//console.log(data);

