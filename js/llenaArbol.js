//https://es.javascript.info/modifying-document
let direccion = document.URL;
console.log(direccion);

window.document.title = integrantes[0].nombres.toUpperCase();
//contenedor.insertAdjacentHTML('beforeend', origen.toString());

let pareja, abrirDetalle, cuadroDetalle, miembros, persona, vieneDe;
miembros=integrantes.length;

console.log("Número de miembros rama " + integrantes[0].id, miembros);

contenedor.insertAdjacentHTML('beforeend', integrantes[0].encabezado1());
if (integrantes[0].status !='s') { 
  pareja = integrantes[0].id;
  document.getElementById(pareja).insertAdjacentHTML('beforeend', integrantes[1].pareja());
}

for (let i=2; i<miembros; i++) {
  persona = integrantes[i];
  cuadroDetalle = persona.raiz();
  //console.table(persona.nombres, persona.raiz(), cuadroDetalle)

  if ((persona.nivel == 2 && persona.tipo=="f") || persona.nivel==1) {
    contenedor.insertAdjacentHTML('beforeend', persona.toString());
  }
}

for (let i=1; i<miembros; i++) {
    persona = integrantes[i];
    console.log(persona.nombres, persona.id, persona.raiz())
    if (persona.nivel >2 || (persona.nivel==2 && persona.tipo =='p')) {      
      cuadroDetalle = document.getElementById(persona.raiz());
      cuadroDetalle.insertAdjacentHTML('beforeend', persona.toString());
    }
}
