function crearTabla(){
   let filas=parseInt(prompt('numero de filas'));
   let columnas=parseInt(prompt('numero de columnas'));

   for (let i = 0; i < filas; i++) {
      let filaActual=document.getElementById('tblDatos').insertRow(i);
      
      for (let j = 0; j < columnas; j++) {
         let celda=filaActual.insertCell(j);
         celda.innerHTML=`File:${i} - columnas: ${j}`;
   }
}
}