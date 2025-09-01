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
  const total = 8;

  for (let i = 1; i <= total; i++) {
    const vista = document.getElementById(`vista${i}`);
    if (i === numProducto) {
      vista.style.display = (vista.style.display === 'block') ? 'none' : 'block';
    } else {
      vista.style.display = 'none';
    }
  }
}

var pregunta1 = ""
var pregunta2 = ""
var pregunta3 = ""
var pregunta4 = ""
var pregunta5 = ""
var pregunta6 = ""
var pregunta7 = ""

function enviarPregunta(nPregunta){
    if (nPregunta == 1){
        pregunta1 = document.getElementById("preg1").value
        document.getElementById("pregunta1").style.display = "none"
        document.getElementById("pregunta2").style.display = "block"
    }
    else if (nPregunta == 2){
        pregunta2 = document.getElementById("preg2").value
        document.getElementById("pregunta2").style.display = "none"
        document.getElementById("pregunta3").style.display = "block"
    }
    else if (nPregunta == 3){
        pregunta2 = document.getElementById("preg3").value
        document.getElementById("pregunta3").style.display = "none"
        document.getElementById("pregunta4").style.display = "block"
    }
    else if (nPregunta == 4){
        pregunta2 = document.getElementById("preg4").value
        document.getElementById("pregunta4").style.display = "none"
        document.getElementById("pregunta5").style.display = "block"
    }
     else if (nPregunta == 5){
        pregunta2 = document.getElementById("preg5").value
        document.getElementById("pregunta5").style.display = "none"
        document.getElementById("pregunta6").style.display = "block"
    }
     else if (nPregunta == 6){
        pregunta2 = document.getElementById("preg6").value
        document.getElementById("pregunta6").style.display = "none"
        document.getElementById("pregunta7").style.display = "block"
    }
    else if (nPregunta == 7){
        pregunta2 = document.getElementById("preg7").value
        document.getElementById("pregunta7").style.display = "none"

        //UNA VEZ QUE TERMINA...
        // --- RECOMENDACIONES DE CAFÉ ---
        if (pregunta1 == "frio" && pregunta2 == "fuerte" && pregunta5 == "sin alcohl"){
            document.getElementById("resultado1").style.display = "block"; // Café dulce
        }
        else if (pregunta1 == "caliente" && pregunta2 == "suave" && pregunta5 == "sin alcohl"){
            document.getElementById("resultado2").style.display = "block"; // Café cremoso
        }
        else if (pregunta1 == "caliente" && pregunta4 == "clasico" && pregunta5 == "sin alcohl"){
            document.getElementById("resultado3").style.display = "block"; // Café negro
        }
        else if (pregunta1 == "frio" && pregunta4 == "innovador" && pregunta5 == "con alcohl"){
            document.getElementById("resultado4").style.display = "block"; // Café shot
        }
        else if (pregunta3 == "amargo" && pregunta6 == "elaborado"){
            document.getElementById("resultado5").style.display = "block"; // Café puro
        }
        else if (pregunta1 == "caliente" && pregunta4 == "innovador" && pregunta7 == "suave"){
            document.getElementById("resultado6").style.display = "block"; // Café frío
        }
        else if (pregunta1 == "frio" && pregunta6 == "capas" && pregunta3 == "dulce"){
            document.getElementById("resultado7").style.display = "block"; // Café 3 capas
        }
        else {
            document.getElementById("resultado8").style.display = "block"; // Default
        }
    }
}
