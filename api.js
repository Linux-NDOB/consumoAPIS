//Consumir API

api= 'https://www.datos.gov.co/resource/6u2i-cstb.json';

loadAll = async function(){ 
    try { 
        const respuesta = await fetch(this.api); 
        //const data = await respuesta.json(); 
 
        if (respuesta.status == 200) { 
            let json = await respuesta.json(); // (3) 
            //console.log(json); 
            return json; 
        } 
    } catch (error) { 
        console.log("ERROR: "+error) 
    } 
} ; 

 get = async function(fecha, pais, municipio,delito,genero,zona) { 
    try { 
        url =this.api+"?fecha="+fecha+"&pais="+pais+"&municipio="+municipio+"&delito"+delito+"&genero="+genero+"&zona"+zona; 

        const respuesta = await fetch(this.api); 
        //const data = await respuesta.json(); 
 
        if (respuesta.status == 200) { 
            let json = await respuesta.json(); // (3) 
            console.log(json); 
            return json; 
        } 
        } catch (error) { 
        console.log("ERROR: "+error) 
    } 
}


var datosJson ;
//Cargar datos

  function load() { const all = loadAll().then(data => {
    //console.log(data);
    datosJson = data ;

  document.getElementById("tabla");

  const dv = document.getElementById("tabla");
  const item = document.createElement("div");
  item.className = "row";

  let table = `<table  id="tablaDatos" class="striped"> 
                     <thead> 
                     <tr> 
                        <th scope="col">#</th>
                         <th scope="col">FECHA</th> 
                         <th scope="col">PAIS</th> 
                         <th scope="col">MUNICIPIO</th> 
                         <th scope="col">DELITO</th> 
                         <th scope="col">GENERO</th> 
                         <th scope="col">DETALLES</th> 
                     </tr> 
                     </thead>`;
    data.forEach((item , index)=>{ table = table + `<tr> 
                                              <td scope="row">${index+1}</td> 
                                              <td>${item.fecha}</td> 
                                              <td>${item.pais}</td>
                                              <td>${item.municipio}</td> 
                                              <td>${item.delito}</td> 
                                              <td>${item.genero}</td> 
                                    
                                              <td><a id="myLink" href="#" onclick="detalles('${item.fecha}', '${item.pais}', '${item.municipio}', '${item.delito}' , '${item.genero}','${item.circusntacia_del_delito}', '${item.pais_capturado}','${item.zona}');return false;">Detalles</a></td> 
                                          </tr>`; 
                                          }); 
                    table = table + ` </tbody> 
                    </table>`; 
                     
                    item.innerHTML = table; 
                    dv.appendChild(item);
                  }); 
 
           
  };
    

function detalles(fecha, pais, municipio,delito,genero,circusntancia,paiscaptura,zona) { 
    let mensaje = ''; 
    const todos = get(fecha, pais, municipio,delito,genero,circusntancia,paiscaptura,zona) 
                .then(data =>  { 
                    mensaje = `FECHA: ${data[0].fecha} 
                               \nPAIS: ${data[0].pais} 
                               \nMUNICIPIO: ${data[0].municipio} 
                               \nDELITO: ${data[0].delito} 
                               \nGENERO: ${data[0].genero} 
                                
                               \nZONA: ${data[0].zona} `; 
                    alert(mensaje) 
                }); 
}

// CIRCUNSTANCIA: ${data[0].circusntacia_del_del_delito} \n 
//                                 PAIS CAPTURA: ${data[0].pais_capturado} \n 
 
/** Función para ver la cantidad de estudiantes por Periodo */ 

function totalHombres() { const all = loadAll().then(data => {
  //console.log(data.length); 
  let mensaje = '';
  let j = 0;
  for(let i = 0; i < data.length ;  i++) {
    
    let genero = data[i].genero;
    
    if(genero == 'MASCULINO'){
      j ++;
      mensaje = "El total de hombres capurados por delitos sexuales es:" + j;
    }
  }
  
  alert(mensaje); 
  e.preventDefault(); 
   
});
}

function totalMujeres() { const all = loadAll().then(data => {
  //console.log(data.length); 
  let mensaje = '';
  let j = 0;
  for(let i = 0; i < data.length ;  i++) {
    
    let genero = data[i].genero;
    
    if(genero == 'FEMENINO'){
      j ++;
      mensaje = "El total de mujeres capuradas por delitos sexuales es:" + j;
    }
  }
  
  alert(mensaje); 
  e.preventDefault(); 
   
});
}

function totalF() { const all = loadAll().then(data => {
  //console.log(data.length); 
  let mensaje = '';
  let j = 0;
  for(let i = 0; i < data.length ;  i++) {
    
    let genero = data[i].circunstacia_de_la_captura;
    
    if(genero == "FLAGRANCIA LEY 906"){
      j ++;
      mensaje = "El total de  capurados por FLAGRANCIA LEY 906 es:" + j;
    }
  }
  
  alert(mensaje); 
  e.preventDefault(); 
   
});
}

function totalO() { const all = loadAll().then(data => {
  //console.log(data.length); 
  let mensaje = '';
  let j = 0;
  for(let i = 0; i < data.length ;  i++) {
    
    let genero = data[i].circunstacia_de_la_captura;
    
    if(genero == "ORDEN JUDICIAL LEY 906"){
      j ++;
      mensaje = "El total de  capurados por ORDEN JUDICIAL LEY 906 es:" + j;
    }
  }
  
  alert(mensaje); 
  e.preventDefault(); 
   
});
}

function p() { const all = loadAll().then(data => {
  //console.log(data.length); 
  let mensaje = '';
  let j = 0;
  for(let i = 0; i < data.length ;  i++) {
    
    let genero1 = data[i].genero;
    
    if(genero1 == 'FEMENINO'){
      j ++;
      
    }
  }

  let a = 0;
  for(let b = 0; b < data.length ;  b++) {
    
    let genero = data[b].genero;
    
    if(genero == 'MASCULINO'){
      a ++;
      
    }
  }

  mensaje = "El total de hombres capturados es " + a + "\n"+
            "Lo cual es igual: "+ ((a/1000)*100) + "%" + "\n"+
            "El total del mujeres capturados es " + j + "\n" + 
             "Lo cual es igual a: " + ((j/1000)*100) + "%"
  
  alert(mensaje); 
  
   
});
}





