export const personajesPrincipales= (data) =>{
  
  let persona1="";
  let persona2="";
  let persona3="";
  let persona4="";
  let persona5="";

  const personaPrincipal1= data.find( personaPrincipal1 => personaPrincipal1.name === "Rick Sanchez" );
  const personaPrincipal2= data.find( personaPrincipal2 => personaPrincipal2.name === "Morty Smith" );
  const personaPrincipal3= data.find( personaPrincipal3 => personaPrincipal3.name === "Beth Smith" );
  const personaPrincipal4= data.find( personaPrincipal4 => personaPrincipal4.name === "Summer Smith" );
  const personaPrincipal5= data.find( personaPrincipal5 => personaPrincipal5.name === "Jerry Smith" );

  persona1 = personaPrincipal1
  persona2 = personaPrincipal2
  persona3 = personaPrincipal3
  persona4 = personaPrincipal4 
  persona5  = personaPrincipal5 

  const todosJuntos= [persona1, persona2,persona3,persona4,persona5];
  //console.log(todosJuntos)
  return todosJuntos;

}

export const ordenAlfabetico= (data) =>{
  const ordenados= data;
  //console.log(ordenados);
  function sortArrayByName(x, y){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
  }
  return ordenados.sort(sortArrayByName); 
}


export const imagenesordenadasAlreves= (ordenAlfabetico)=>{
  // eslint-disable-next-line no-unused-vars
  const voltear= ordenAlfabetico.reverse();
  return voltear;
}


export const filtrarEspecies = (data, param) => {
// console.log('data que llega; ', data);
//console.log('select: ', param);

  const especiesTotal = data.filter(dataCompleta => dataCompleta.species === param);
  return especiesTotal;
};
export const traerBuscado= (data, param) => {
  const encontradosporNombre = data.filter(personaje=> personaje.name.toLowerCase().indexOf(param) !== -1);
  return encontradosporNombre;
}
export const status= (data,param)=>{
  const traerStatus = data.filter(data => data.status === param);
console.log(traerStatus);
return traerStatus
}


