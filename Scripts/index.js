/*Cadastro de Pacientes com variáveis globais, uso de vetores para criar lista de pacientes, uso de push, unshift, shift e pop para funcionamento dos botões Adicionar, Urgência e Atender */


    var Lista = "";
    var Listagem = [];
    var Atendendo = "";

function Adicionar(){

    var Paciente = document.getElementById("inPaciente").value;

    Listagem.push(Paciente);

    Lista = "";

    for (var i = 0; i < Listagem.length; i++){
        Lista = Lista + (i + 1) + ". " + Listagem[i] + "\n";
    }

    document.getElementById("outFilaAtendimento").textContent = Lista;

    document.getElementById("outAtendimento").textContent = "Em atendimento: " + Atendendo;
}

function Urgencia(){

    var Paciente = document.getElementById("inPaciente").value;

    Listagem.unshift(Paciente);

    Lista = "";

    for (var i = 0; i < Listagem.length; i++){
        Lista = Lista + (i + 1) + ". " + Listagem[i] + "\n";
    }

    document.getElementById("outFilaAtendimento").textContent = Lista;
    
    document.getElementById("outAtendimento").textContent = "Em atendimento: " + Atendendo;

}

function Atender(){

    var Paciente = document.getElementById("inPaciente").value;

    Atendendo = Listagem[0];

    Listagem.shift();

    Lista = "";
    for (var i = 0; i < Listagem.length; i++){
        Lista = Lista + (i + 1) + ". " + Listagem[i] + "\n";
    }

    document.getElementById("outAtendimento").textContent = "Em atendimento: " + Atendendo;

    document.getElementById("outFilaAtendimento").textContent = Lista;

}

var btAdicionar = document.getElementById("btAdd");
var btUrgencia = document.getElementById("btUrgencia");
var btAtender = document.getElementById("btAtendimento");

btAdicionar.addEventListener("click", Adicionar);
btUrgencia.addEventListener("click", Urgencia);
btAtender.addEventListener("click", Atender);
