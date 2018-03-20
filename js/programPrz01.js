document.getElementById("dopiszJs").addEventListener("click", dopiszJs, false);

function dopiszJs() {
    var nazwisko = document.getElementById("nazwisko").value;
    var lista = document.getElementById("lista");
    var opcja = document.createElement("option");
    opcja.text  = nazwisko+" JS";
    opcja.value = lista.options.length + 1;

    lista.appendChild(opcja);
}

// kolejna zmiana

function dopiszJq(){
    var numer = $("#lista>option").length + 1;
    $("#lista").append("<option value='" + numer + "'>" + $("#nazwisko").val() + " jQ</option>");
}

$("#dopiszJq").click(dopiszJq);

// jquery
function dopisz() {
    $("#js").is(":checked")?dopiszJs():dopiszJq();
    //$("#js").prop("checked",true)?dopiszJs():dopiszJq();  // nadanie wartości
}





