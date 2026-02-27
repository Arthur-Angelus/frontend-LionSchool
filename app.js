'use strict'

function aparecerAlunos() {
  const botaoSair = document.getElementById('sair');
  const principal = document.getElementById('principal')
  const ds = document.getElementById('alunos-ds');
  const botaoDs = document.getElementById('ds');
  const rd = document.getElementById('alunos-rd')
  const botaoRd = document.getElementById('rd');


  botaoDs.addEventListener('click', function () {
    ds.style.display = 'flex';
    principal.style.display = 'none';
    const container = document.getElementById('cards')
    container.innerHTML = '' // limpa antes de cria

    if (container) {
      alunosDs(container)
  }
  });

  botaoRd.addEventListener('click', function () {
    rd.style.display = 'flex';
    principal.style.display = 'none';
  });

  botaoSair.addEventListener('click', function () {
    rd.style.display = 'none';
    ds.style.display = 'none';
    principal.style.display = 'flex';
  });
}

async function alunosDs(container) {
  const url = 'https://lion-school-backend.onrender.com/alunos?curso_id=1'

  try {
    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(pessoa => {
      const card = document.createElement('button')
      card.classList.add('card')

      card.innerHTML = `
          <img src="${pessoa.foto}" alt="Foto de ${pessoa.nome}">
          <p>${pessoa.nome}</p>
        `
      container.appendChild(card)
    })

  } catch (erro) {
    console.error('Erro ao carregar pessoas:', erro)
  }


}
function alunoInformacao() {

}

aparecerAlunos();