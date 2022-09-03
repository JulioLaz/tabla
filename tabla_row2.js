function crearTablaRow2(){
   // let filas=parseInt(prompt('numero de filas'));
   // let columnas=parseInt(prompt('numero de columnas'));
   let filas=2;
let columnas=8;
   for (let i = 0; i < filas; i++) {
      let filaActual=document.getElementById('tblDatosRow2').insertRow(i);
      
      for (let j = 0; j < columnas; j++) {
       let celda=  filaActual.insertCell(j);
      if(i===1){
         celda.innerHTML=`⛔⛔⛔⛔`
      } 
      }}}
      
      // let celdas=document.getElementById('tblDatosRow2').rows[1].cells;