const dailyCard = document.getElementById("dailyCard");
const cardImage = document.getElementById("cardImage");
const cardMessage = document.getElementById("cardMessage");

const cards = [
  {
    name: "O Louco",
    image: "../assets/fool.svg",
    message: "Arrisque-se, o mundo é seu playground.",
  },
  {
    name: "O Mago",
    image: "../assets/magician.svg",
    message: "Você tem tudo de que precisa para começar.",
  },
  {
    name: "A Sacerdotisa",
    image: "../assets/highpriestress.svg",
    message: "Silêncio e intuição guiam seu caminho.",
  },
  {
    name: "A Imperatriz",
    image: "../assets/empress.svg",
    message: "Colha os frutos da sua criatividade.",
  },
  {
    name: "O Imperador",
    image: "../assets/emperor.svg",
    message: "Firmeza e controle são essenciais agora.",
  },
  {
    name: "O Hierofante",
    image: "../assets/hierophant.svg",
    message: "Siga a sabedoria da tradição.",
  },
  {
    name: "Os Amantes",
    image: "../assets/lovers.svg",
    message: "Escolha com o coração, mas com clareza.",
  },
  {
    name: "O Carro",
    image: "../assets/chariot.svg",
    message: "Vá com tudo — o sucesso vem com ação.",
  },
  {
    name: "A Força",
    image: "../assets/forca.svg",
    message: "Sua coragem supera qualquer obstáculo.",
  },
  {
    name: "O Eremita",
    image: "../assets/hermit.svg",
    message: "Pare, respire e reflita.",
  },
  {
    name: "A Roda da Fortuna",
    image: "../assets/fortune.svg",
    message: "Tudo muda — confie no ciclo.",
  },
  {
    name: "A Justiça",
    image: "../assets/justice.svg",
    message: "Decisões justas trarão equilíbrio.",
  },
  {
    name: "O Enforcado",
    image: "../assets/hangedman.svg",
    message: "Aceite o momento e enxergue por outro ângulo.",
  },
  {
    name: "A Morte",
    image: "../assets/death.svg",
    message: "Libere o velho para dar espaço ao novo.",
  },
  {
    name: "A Temperança",
    image: "../assets/temperance.svg",
    message: "Equilíbrio é a chave da cura.",
  },
  {
    name: "O Diabo",
    image: "../assets/devil.svg",
    message: "Liberte-se do que te aprisiona.",
  },
  {
    name: "A Torre",
    image: "../assets/tower.svg",
    message: "A verdade pode chocar, mas liberta.",
  },
  {
    name: "A Estrela",
    image: "../assets/star.svg",
    message: "Esperança e renovação estão a caminho.",
  },
  {
    name: "A Lua",
    image: "../assets/moon.svg",
    message: "Nem tudo é o que parece — observe.",
  },
  {
    name: "O Sol",
    image: "../assets/sun.svg",
    message: "Alegria, clareza e sucesso batem à porta.",
  },
  {
    name: "O Julgamento",
    image: "../assets/judgment.svg",
    message: "Desperte para seu verdadeiro propósito.",
  },
  {
    name: "O Mundo",
    image: "../assets/world.svg",
    message: "Missão cumprida — você chegou lá.",
  },
];

let isFlipped = false;

dailyCard.addEventListener("click", () => {
  isFlipped = !isFlipped;

  if (isFlipped) {
    dailyCard.classList.add("flipped");

    const selectedCard = cards[Math.floor(Math.random() * cards.length)];
    cardImage.src = selectedCard.image;
    cardImage.alt = selectedCard.name;
    cardMessage.textContent = `${selectedCard.name}: ${selectedCard.message}`;
  } else {
    dailyCard.classList.remove("flipped");
    cardImage.src = "";
    cardMessage.textContent = "";
  }
});
