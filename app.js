'use strict'

document.addEventListener("DOMContentLoaded", function () {
    aparecerAlunos();
  });

function aparecerAlunos(){
    const botaoSair = document.getElementById('sair');
    const principal = document.getElementById('principal')
    const ds = document.getElementById('alunos-ds');
    const botaoDs = document.getElementById('ds');
    const rd = document.getElementById('alunos-rd')
    const botaoRd = document.getElementById('rd');


    botaoDs.addEventListener('click', function() {
        ds.style.display = 'flex'; 
        principal.style.display = 'none';
      });

      botaoRd.addEventListener('click', function() {
        rd.style.display = 'flex'; 
        principal.style.display = 'none';
      });

      botaoSair.addEventListener('click', function() {
        rd.style.display = 'none';
        ds.style.display = 'none';
        principal.style.display = 'flex';
      });
}

async function alunosDs(params) {
    const response = await fetch('https://lion-school-backend.onrender.com/alunos?curso_id=1')
    const cards = document.getElementById('cards')
    const card = document.createElement('card')
}
function alunoInformacao(){
    const botaoInfo = document.getElementById('alunoInfo')
}

aparecerAlunos();