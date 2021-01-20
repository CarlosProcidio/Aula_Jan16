// Scrpit usando nomenclatura normal ou jquery 
function LimparParcial(){
 //   document.getElementById('num1').value = "";
 //   document.getElementById('num2').value = "";
 //   document.getElementById('operacao').value = "";
$('#num1').val("");
$('#num2').val("");
$('#operacao').val("");
 }

 function Limpar(){
//    document.getElementById('num1').value = "";
//    document.getElementById('num2').value = "";
//    document.getElementById('operacao').value = "";
//    document.getElementById('resultado').value = "";
$('#num1').val("");
$('#num2').val("");
$('#operacao').val("");
$('#resultado').val("");
 }

 function Calcular() {
//var numero1 = document.getElementById('num1').value;
//var numero2 = document.getElementById('num2').value;
//var codOper = document.getElementById('operacao').value;
 
var numero1 = $('#num1').val();
var numero2 = $('#num2').val();
var codOper = $('#operacao').val();

var resultado;
/*
if (numero1 == ""){
    alert("Favor digitar um número válido para a operação (num1)");
    return false;
}

if (numero2 == ""){
    alert("Favor digitar um número válido para a operação (num2)");
    return false;
}
*/

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);
codOper = parseFloat(codOper);


switch (codOper) {
    case 1: resultad = parseFloat(numero1 - numero2);
        break;
    case 2: resultad = parseFloat(numero1 + numero2);
        break;
    case 3: resultad = parseFloat(numero1 * numero2);
        break;
    case 4: 
        if ( numero2 == 0){alert("numero não pode ser divisel por 0");resultad="";break;Limpar()
        }else{resultad = parseFloat(numero1 / numero2);break;}
    default: alert('Escolha uma operação válida.');
        return false;
    }

LimparParcial();
//document.getElementById('resultado').value = resultad;
$('#resultado').val(resultad);
}


