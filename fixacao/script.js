const textoInput = document.getElementById("texto")
console.log(textoInput.innerHTML);

const parag = document.getElementById("paragrafo")
console.log(parag.innerHTML);

const mudarTexto = function() {
    console.log(document.getElementById("texto").value);
}

const alteraTexto = function() {
    parag.innerHTML = textoInput.value
    textoInput.value = ""
}