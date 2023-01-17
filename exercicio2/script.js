let nome = document.getElementById("nome")
console.log(nome.value);
nome.value = ""
console.log(nome.value);

let endereço = document.getElementById("endereco")
console.log(endereco.value);
endereço.value = ""
console.log(endereco.value);

let email = document.getElementById("email")
console.log(email.value);
email.value = ""
console.log(email.value);

const exibirNome = function() {
    console.log(document.getElementById("nome").value);
}

const exibirEndereco = function() {
    console.log(document.getElementById("endereco").value);
}

const exibirEmail = function() {
    console.log(document.getElementById("email").value);
}

const mostrarForm = () => {
    exibirNome()
    exibirEndereco()
    exibirEmail()
    document.getElementById("nome").value = ""
    document.getElementById("endereco").value = ""
    document.getElementById("email").value = ""
}