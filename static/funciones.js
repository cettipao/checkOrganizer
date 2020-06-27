
$(document).ready(function () {
    $('.modal').modal();
});

var personas = 1;

function addPart() {
    personas++;
    document.getElementById("numPart").innerText= personas;
    document.getElementById("participantes").innerHTML +=
    '<div class="divider"></div><div class="row"><div class="input-field col s10"><i class="material-icons prefix">account_circle</i><input id="apodo'+personas+'" type="text" class="validate"><label for="apodo'+personas+'">Apodo</label></div><div class="input-field col s6"><i class="material-icons prefix">attach_money</i><input id="monto'+personas+'" type="number" class="validate"><label for="monto'+personas+'">Monto</label></div><div class="input-field col s6"><i class="material-icons prefix">shopping_basket</i><input id="producto'+personas+'" type="number" class="validate"><label for="producto'+personas+'">Producto</label></div></div>'
}

function sumUp(){
    document.getElementById("totalPart").innerText = personas;
    
}