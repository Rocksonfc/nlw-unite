https://www.fronteditor.dev/nlw-unite

# HTML

*Hypertext*
*Markup*
- Tag
- Atributos

*Languange*

# CSS
Cascading StyleSheet

# JavaScript



// objeto javascript

const participante = {
  nome: "Mayk Brito",
  email: "mayk@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckin: new Date(2024, 2, 25, 22, 00)
}

let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckin: new Date(2024, 2, 25, 22, 00)
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
    dataCheckin: new Date(2024, 2, 28, 11, 30)
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
    dataCheckin: new Date(2024, 3, 1, 7, 25)
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
    dataCheckin: new Date(2024, 3, 3, 12, 40)
  },
  {
    nome: "Juliana Pereira",
    email: "juliana.pereira@example.com",
    dataInscricao: new Date(2024, 2, 31, 7, 50),
    dataCheckin: new Date(2024, 3, 4, 5, 15)
  }
];

// estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
