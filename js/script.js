
let listaclientes=[];


function mostrar(){
    let clientes ="";

    for ( let i=0; i<listaclientes.length; i++){
         clientes+= `<tr><td>${listaclientes[i].id} </td>  <td>${listaclientes[i].nombre} </td> <td>${listaclientes[i].apellido} </td> 
         <td>${listaclientes[i].rut} </td> <td>${listaclientes[i].telefono} </td> <td>${listaclientes[i].status} </td>  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
         <i class="far fa-address-card" width=30></i></button></td>
         <td><img src="img/eliminar.png" width=30 id= "delete">   </td></tr>`
      }
     
     document.getElementById('listita').innerHTML=clientes;
     sumar();
}
let getJSONData = (url)=>{
    var result = {};
    
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
         
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        
        return result;
    });
}


document.addEventListener('DOMContentLoaded',()=>{
     
    
    getJSONData('api/clientes.json').then( resultado=>{
        if (resultado.status=="ok"){
             listaclientes = resultado.data;
              mostrar();
                     
        }
    })
    for (let i=0; i< envio.length; i++){
        envio[i].addEventListener('click',()=>{
            sumar();
        })
       
    }
});
   

