
$(document).ready(function () {
    $('.modal').modal();
});

var personas = 1;
var montoTotal = 0;

function addPart(event) {
    event.preventDefault();
    personas++;
    document.getElementById("numPart").innerText= personas;
    document.getElementById("participantes").innerHTML +=
    '<div class="divider"></div><div class="row"><div class="input-field col s7"><i class="material-icons prefix">account_circle</i><input id="apodo'+personas+'" type="text" class="validate"><label for="apodo'+personas+'">Apodo</label></div><div class="input-field col s5"><i class="material-icons prefix">attach_money</i><input id="monto'+personas+'" type="number" class="validate"><label for="monto'+personas+'">Monto</label></div>'
}

function sumUp(){
    document.getElementById("totalPart").innerText = ' '+personas;
    var perWhile = 1;
    while (perWhile<=personas) {
        montoTotal += parseInt(document.getElementById('monto'+perWhile).value);
        perWhile++;
    }
    document.getElementById("totalMonto").innerText = ' '+montoTotal;
    document.getElementById("totalc/u").innerText = ' '+montoTotal/personas;
    perWhile = 1;
    while (perWhile<=personas) {
        var apodo = document.getElementById('apodo'+perWhile).value;
        var pago = document.getElementById('monto'+perWhile).value;
        var balance = pago-(montoTotal/personas);
        if(balance>=0){
            balance = 'Cobra $'+balance.toFixed();
        }
        else{
            balance = 'Paga $'+(Math.abs(balance)).toFixed();
        }
        document.getElementById("tabla").innerHTML += '<tr><td>'+apodo+'</td><td>'+pago+'</td><td>'+balance+'</td></tr>'
        perWhile++;
    }

}