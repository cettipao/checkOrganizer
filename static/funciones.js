
$(document).ready(function () {
    $('.modal').modal();
});

var personas = 1;
var montoTotal = 0;

function addPart(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    personas++;
    document.getElementById("numPart").innerText= personas;

    var newdiv = document.createElement("div");
    newdiv.innerHTML = '<div class="divider"></div><div class="row"><div class="input-field col s7"><i class="material-icons prefix">account_circle</i><input id="apodo'+personas+'" type="text" class="validate"><label for="apodo'+personas+'">Apodo</label></div><div class="input-field col s5"><i class="material-icons prefix">attach_money</i><input id="monto'+personas+'" type="number" class="validate"><label for="monto'+personas+'">Monto</label></div>';

    //document.getElementById("participantes").innerHTML +=
    //'<div class="divider"></div><div class="row"><div class="input-field col s7"><i class="material-icons prefix">account_circle</i><input id="apodo'+personas+'" type="text" class="validate"><label for="apodo'+personas+'">Apodo</label></div><div class="input-field col s5"><i class="material-icons prefix">attach_money</i><input id="monto'+personas+'" type="number" class="validate"><label for="monto'+personas+'">Monto</label></div>'

    document.getElementById("participantes").appendChild(newdiv);
}

function sumUp(){
    document.getElementById("tabla").innerHTML = '';
    var personasFinales = 0;
    var perWhile = 1;
    //validar personas solo con nombre y calcular monto final
    while (perWhile<=personas) {
        if (document.getElementById('apodo'+perWhile).value != ''){//Si tiene nombre
            personasFinales++;//Cuenta como persona
            if (document.getElementById('monto'+perWhile).value != 0){//Si tiene Valor
                montoTotal += parseInt(document.getElementById('monto'+perWhile).value);//Lo sumo al montoTotal
            }
            //Es decir, Si no tiene nombre pero si valor se invalida la persona
        }
        perWhile++;
    }
    var perWhile2 = 1;
    while (perWhile2<=personas) {//Uso la cantidad de veces que se apreto el boton a pesar de ya saber los validos
        if(document.getElementById('apodo'+perWhile2).value == ''){
            perWhile2++;//En el caso que este tratando con una persona sin nombre, lo invalido y paso al siguiente
            continue;
        }
        //Codigo inutil, ya que no existe el caso de una persona sin nombre
        /*
        var apodo = "";
        if (document.getElementById('apodo'+perWhile2).value != ''){
            apodo = document.getElementById('apodo'+perWhile2).value;
        }*/
        var apodo = document.getElementById('apodo'+perWhile2).value;//Asigno nombre
        var pago = 0;
        if (document.getElementById('monto'+perWhile2).value != 0){//Si tiene Valor
            pago = document.getElementById('monto'+perWhile2).value;//Asigno su pago en caso de no ser 0
        }
        var balance = pago-(montoTotal/personas);//Calculo balance
        //Estetica
        if(balance>0){
            balance = 'Cobra $'+balance.toFixed();
        }
        else{
            balance = 'Paga $'+(Math.abs(balance)).toFixed();
        }
        //Asigno row a tabla
        document.getElementById("tabla").innerHTML += '<tr><td>'+apodo+'</td><td>'+pago+'</td><td>'+balance+'</td></tr>'
        perWhile2++;
    }
    document.getElementById("totalMonto").innerText = ' '+montoTotal;
    document.getElementById("totalc/u").innerText = ' '+montoTotal/personasFinales;
    document.getElementById("totalPart").innerText = ' '+personasFinales;
    montoTotal = 0;
    personasFinales = 0;
    perWhile = 1;
    perWhile2 = 1;

}