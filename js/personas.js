class Familiar {
  static titol ="DE LA TORRE RINCÓN"

  constructor(id, nivel, tipo, status, nombres, apellidos, sexo, nace, muere, detalle, url, foto) {
    this.id = id;
    this.nivel = nivel;
    this.tipo = tipo;
    this.status = status;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.nace = nace;
    this.muere = muere;
    this.detalle = detalle;
    this.url = url;
    this.foto = foto;    
  }

  raiz() {
    let raiz2 = this.id.toString();
    raiz2 = raiz2.slice(0,3);
    raiz2 = raiz2 + "d";
    return raiz2;
  }

  abreDetalle() {
    let mostrar="";
    if (this.nivel==2 && this.tipo=="f") {  
      mostrar=`<details id="${this.id}d"><summary>&nbsp;</sumary></details>`;

      mostrar = `
      <div id="${this.id}d" class="detalle" style="display: block;" >
      </div>
      `;

    }

    return mostrar;
  } 

  tFoto() {
    let claseFoto='';
    if (this.tipo=="f")  {
      claseFoto=`f${this.nivel}`
    } else if (this.tipo=="p")  {
      claseFoto=`fp${this.nivel}`    
    }
    console.log(claseFoto);
    return claseFoto; 
  }

  tFila() {
    let claseFila='';
    if (this.tipo=="f") {
      if (this.nivel==2) {
        claseFila='fam2';
      } else {
        claseFila='family';
      }
    } else  {
        claseFila='pareja';
    }
    return claseFila;
  }

  iconStatus() {
    let icono = " ";
    if (this.tipo=='f') {
      icono ="&nbsp;";
    } else {
      switch (this.status) {
        case "c": icono = "&#128149;"; break;
        case "d": icono = "&#128148;"; break;
        case "v": icono = "&#128420;"; break;
        case "r": icono = "&hearts;"; break;
        case "s": icono = "&#9825;"; break;
        default: icono ="&nbsp;"; break;
      } 
    }
  
    return icono;
  }

  tNivel() {
    let tituloNivel="";
    let sufijo =((this.sexo =='f') ? "a" : "o")

    switch (this.nivel) {
      case 2: tituloNivel = "hij" + sufijo ; break;
      case 3: tituloNivel = "niet" + sufijo; break;
      case 4: tituloNivel = "bisniet" + sufijo; break;
      case 5: tituloNivel = "tataraniet" + sufijo; break;
      default: tituloNivel = "descendiente directo"; break;
    }
 
    if (this.tipo!='f') {
      tituloNivel = ((this.status =='d' || this.status =='s') ? 'ex-pareja ' : 'pareja ');
    }
    return tituloNivel;
  }

  cruz() {
    let iconCruz = "";
    
    if (this.muere === 'v' || this.muere =='') {
      iconCruz='';
    } else if (this.muere === 'm' ) {
      iconCruz=" &#9840; ";
    } else {
      iconCruz = " &#9840; " + "fallece: " + this.muere
    }

    return iconCruz;
  }

  vida() {
    let fechas ='';
    if (this.nace!='') {
      fechas  += "cumple: " + this.nace;
    }
    if (this.cruz()!='') {
      fechas += this.cruz();
    }
    return fechas;
  }

  enlace() {
    let enlace = `<a target="_blank" href="${this.url}">&#x1F310;</a>`;
    return enlace;
  }

  llevaEnlace() {
    let lleva = true;
    if (this.url[0] == "-" || this.url[0] == "+") {
      lleva = false;
    }
    return lleva;
  }

  imagenMostrar() {
    let n = this.nivel;
    let fotografia = (this.foto !== false) ? this.id + this.foto : 'none.png';
    return  `<img class="foto foto${n} ${this.tFoto()}" title="${this.nombres} (${this.id})" src="./img/${fotografia}"/>`
    
  }

  toString() {
    let gridPersona = "";
    let n = this.nivel;
    let margen = "m"+(n-1);

/*    
    <div class="nivel2" id="551">
      <div class="margen"><span class="m1">&nbsp;</span> </div>
      <div class="imagen"><img class="foto f2" src="../img/551.png"/></div>
      <div class="fam2">
        <p class="principal"> 
        <a target="_blank" href="https://delatorrerita.github.io/perfiles/rita.html">&#x1F310;</a>
        Rita Sofía de la Torre Chirivella</p>
      </div>
      <div class="dates">(2 de julio)</div>
    </div>


*/
      gridPersona += `
        <div id="${this.id}" class="nivel${n}">
          <div class="margen"><span class="${margen}">&nbsp;</span></div>
          <div class="imagen">${this.imagenMostrar()}</div>
          <div class="${this.tFila()}" title="${this.tNivel()}">
            <p class="principal">`
      if (this.llevaEnlace()) { gridPersona += this.enlace(); }  
      gridPersona +=`    
              ${this.nombres} ${this.apellidos} ${this.iconStatus()}
            </p>
          </div>
          <div class="dates">${this.vida()}</div>
        </div>
      `
      if (this.nivel==2 && this.tipo=="f" && this.detalle) {  
        gridPersona += `
          <details class="detalles" id="${this.raiz()}">
            <summary>&nbsp;</summary>
          </details> 
        `
      } 

    
    return gridPersona;
  }

  encabezado1() {
    let gridPersona = "";
    let n = this.nivel;
    gridPersona += `  
      <div id="${this.id}" class="nivel${n}">
        <div class="imagen1">${this.imagenMostrar()}</div>
        <div id="fam1" class="fam1">
          ${this.nombres}<br>
          <a title="${Familiar.titol}" href="index.html">&#9664;</a> 
          ${this.apellidos}
        </div>
        <div id="date1" class="date1">${this.vida()}</div>
      </div>
    `
    return gridPersona;
  }

  pareja(){
    let gridPersona = "";
    let n = this.nivel;
    gridPersona += ` 
      <div class="imagen1a">${this.imagenMostrar()}</div>
      <div id="fam1a" class="fam1a">${this.nombres}<br>${this.apellidos}</div>
      <div id="date1a" class="date1a">${this.vida()}</div>
    `
    console.log(gridPersona);
    return gridPersona;
  }
}

