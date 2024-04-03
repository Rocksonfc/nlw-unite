let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: null
  },
  {
    nome: "Ana Silva",
    email: "ana.silva@example.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckin: new Date(2024, 2, 26, 9, 45)
  },
  {
    nome: "João Santos",
    email: "joao.santos@example.com",
    dataInscricao: new Date(2024, 2, 24, 15, 45),
    dataCheckin: new Date(2024, 2, 27, 14, 20)
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    dataInscricao: new Date(2024, 2, 25, 8, 10),
    dataCheckin: null
  },
  {
    nome: "Carlos Martins",
    email: "carlos.martins@example.com",
    dataInscricao: new Date(2024, 2, 26, 20, 5),
    dataCheckin: new Date(2024, 2, 29, 18, 15)
  },
  {
    nome: "Mariana Costa",
    email: "mariana.costa@example.com",
    dataInscricao: new Date(2024, 2, 27, 12, 40),
    dataCheckin: new Date(2024, 2, 30, 10, 55)
  },
  {
    nome: "Pedro Rocha",
    email: "pedro.rocha@example.com",
    dataInscricao: new Date(2024, 2, 28, 9, 15),
    dataCheckin: null
  },
  {
    nome: "Camila Almeida",
    email: "camila.almeida@example.com",
    dataInscricao: new Date(2024, 2, 29, 17, 55),
    dataCheckin: new Date(2024, 3, 2, 16, 10)
  },
  {
    nome: "Lucas Souza",
    email: "lucas.souza@example.com",
    dataInscricao: new Date(2024, 2, 30, 14, 25),
    dataCheckin: null
  },
  {
    nome: "Juliana Pereira",
    email: "juliana.pereira@example.com",
    dataInscricao: new Date(2024, 2, 31, 7, 50),
    dataCheckin: new Date(2024, 3, 4, 5, 15)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button 
    data-email="${participante.email}"
    onclick="fazerCheckIn(event)"
    >
    Confirmar check-in
    </button>  
    `
      }

  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  // substituir informacao do html
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => {
      return p.email == participante.email
    }
  )

  if(participanteExiste) {
    alert('Email já existente')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )
  // atualizar check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}