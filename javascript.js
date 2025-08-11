/*function verProducto(numProducto){
    if (numProducto === 1){
        if (document.getElementById("vista1").style.display === 'block'){
            document.getElementById("vista1").style.display = 'none';
        }else{
            document.getElementById("vista1").style.display = 'block';

            document.getElementById("vista2").style.display = 'none';
            document.getElementById("vista3").style.display = 'none';
            document.getElementById("vista4").style.display = 'none';
        }
        
    }
    if (numProducto === 2){
        if (document.getElementById("vista2").style.display === 'block'){
            document.getElementById("vista2").style.display = 'none';
        }else{
            document.getElementById("vista2").style.display = 'block';

            document.getElementById("vista1").style.display = 'none';
            document.getElementById("vista3").style.display = 'none';
            document.getElementById("vista4").style.display = 'none';
        }
        
    }
    if (numProducto === 3){
        if (document.getElementById("vista3").style.display === 'block'){
            document.getElementById("vista3").style.display = 'none';
        }else{
            document.getElementById("vista3").style.display = 'block';

            document.getElementById("vista1").style.display = 'none';
            document.getElementById("vista2").style.display = 'none';
            document.getElementById("vista4").style.display = 'none';
        }
        
    }
    if (numProducto === 4){
        if (document.getElementById("vista4").style.display === 'block'){
            document.getElementById("vista4").style.display = 'none';
        }else{
            document.getElementById("vista4").style.display = 'block';

            document.getElementById("vista1").style.display = 'none';
            document.getElementById("vista2").style.display = 'none';
            document.getElementById("vista3").style.display = 'none';
        }
    }   
}
*/
function verProducto(numProducto) {
  const total = 4;

  for (let i = 1; i <= total; i++) {
    const vista = document.getElementById(`vista${i}`);
    if (i === numProducto) {
      vista.style.display = (vista.style.display === 'block') ? 'none' : 'block';
    } else {
      vista.style.display = 'none';
    }
  }
}

   