let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

let botaoAdicionar = document.querySelector('.bto-principal');

for(let i = 0; i < pacientes.length; i++) {
    let tdPeso = pacientes[i].querySelector(".info-peso");
    let peso = tdPeso.textContent;
    
    let tdAltura = pacientes[i].querySelector(".info-altura");
    let altura = tdAltura.textContent;
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    let tdImc = pacientes[i].querySelector(".info-imc");
    
    if(!pesoValido) {
        pesoValido = false;
        tdImc.innerText = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(!alturaValida) {
        alturaValida = false;
        tdImc.innerText = "Altura Inválida";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(alturaValida && pesoValido) {
    let imc = calculaImc(peso, altura);
    tdImc.innerText = imc;
    }    
}

function validaPeso (peso) {
    if(peso >= 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura (altura) {
    if(altura >=0 && altura < 3){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso/(altura*altura);

    return imc.toFixed(2);
}
