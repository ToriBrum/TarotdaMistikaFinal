const responses = [
  "Confie no seu instinto.",
  "A resposta virá em sonho.",
  "Caminhos se abrirão em breve.",
  "Evite tomar decisões hoje.",
  "Siga o que o coração manda.",
  "Agora é o momento de esperar.",
  "A verdade está mais próxima do que parece.",
  "Escute mais e fale menos.",
  "Uma mudança inesperada trará clareza.",
  "A energia do universo conspira a seu favor.",
  "Seja paciente, tudo tem sua hora.",
  "A intuição será sua melhor guia hoje.",
  "Um ciclo está se encerrando para um novo começar.",
  "Mantenha-se firme nas suas convicções.",
  "Proteja sua energia de influências externas.",
  "A prosperidade baterá à sua porta quando menos esperar.",
  "Um reencontro trará respostas que você procura.",
  "Confie no tempo divino, ele está trabalhando por você.",
  "Alguém pensa em você mais do que imagina.",
  "Uma proposta inesperada mudará seus planos para melhor.",
  "Cuide da mente como cuida do corpo.",
  "A resposta que você busca está na simplicidade.",
  "Novas alianças fortalecerão seu caminho profissional.",
  "Deixe o passado no passado, o futuro te espera.",
  "Um pequeno gesto abrirá grandes portas.",
  "O universo pede mais leveza e menos controle.",
  "Sua coragem será recompensada em breve.",
  "Permita-se sonhar mais alto, você está pronta.",
  "O silêncio hoje revelará mais que mil palavras.",
  "Um novo amor pode florescer de uma amizade antiga.",
  "Caminhos financeiros se estabilizarão com disciplina.",
  "A sabedoria está nas entrelinhas da vida.",
  "Hora de desapegar do que limita sua expansão.",
  "Uma bênção disfarçada já está a caminho.",
  "A gratidão diária multiplicará suas bênçãos.",
];

function askTheCards() {
  const responseEl = document.getElementById("cardResponse");
  
  // Remove classe se já tiver visível (reset da animação)
  responseEl.classList.remove('mostrar');

  // Sorteia a resposta
  const index = Math.floor(Math.random() * responses.length);
  responseEl.textContent = responses[index];

  // Força reflow pra garantir que a animação role de novo
  void responseEl.offsetWidth; 

  // Adiciona a classe que ativa o fade-up
  responseEl.classList.add('mostrar');
}
