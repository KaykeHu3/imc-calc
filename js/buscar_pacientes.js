let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.addEventListener('load', () => {
    let erroAjax = document.querySelector("#erro-ajax");
    if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
        pacientes.forEach((paciente) => {
            adicionaPacienteNaTabela(paciente);
        })
    } else {
        erroAjax.classList.remove("invisivel");
    }
    })
    xhr.send();
})
