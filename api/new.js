import randomizer from "../src/utils/randomizer";

const words = [
  "acorde",
  "advogado",
  "advogado",
  "agenda",
  "água",
  "água",
  "alienígena",
  "anjo",
  "aperto",
  "arranha-céu",
  "atlântida",
  "austrália",
  "azul",
  "azul",
  "banco",
  "banda",
  "banda",
  "base",
  "batida",
  "bermuda",
  "bloco",
  "bomba",
  "bota",
  "buraco",
  "buzina",
  "cachorro",
  "caminho",
  "campainha",
  "canadá",
  "capital",
  "carga",
  "casino",
  "cavaleiro",
  "cavalo",
  "cela",
  "cenoura",
  "centro",
  "china",
  "chocolate",
  "cientista",
  "cientista",
  "cinto",
  "círculo",
  "cobertura",
  "código",
  "colher",
  "contrato",
  "controle",
  "coração",
  "corte",
  "cozinheiro",
  "cravo",
  "cruz",
  "cura",
  "dados",
  "depósito",
  "dia",
  "diamante",
  "doença",
  "dose",
  "doutor",
  "droga",
  "embaixada",
  "encanto",
  "encanto",
  "escorpião",
  "espaço",
  "estação",
  "estrela",
  "faca",
  "fada",
  "fantasia",
  "fantasma",
  "favela",
  "feira",
  "ferro",
  "fio",
  "floresta",
  "fogo",
  "folha",
  "fonte",
  "força",
  "fortaleza",
  "fossa",
  "furgão",
  "gás",
  "gato",
  "gigante",
  "grécia",
  "grilo",
  "guerra",
  "himalaia",
  "hollywood",
  "inglaterra",
  "interruptor",
  "jato",
  "jupiter",
  "laboratório",
  "ladrão",
  "laranja",
  "laser",
  "leão",
  "leito",
  "leve",
  "ligação",
  "limão",
  "limusine",
  "língua",
  "linha",
  "liquido",
  "loja",
  "lua",
  "luva",
  "maçã",
  "manto",
  "mão",
  "marcha",
  "meia",
  "meio",
  "méxico",
  "microscópio",
  "missão",
  "morte",
  "motor",
  "negativo",
  "óleo",
  "olho",
  "operação",
  "orgão",
  "pacífico",
  "palma",
  "parede",
  "parque",
  "passo",
  "pé",
  "peça",
  "peixe",
  "pena",
  "pequim",
  "peru",
  "pilha",
  "pinguim",
  "piramide",
  "pirata",
  "pistola",
  "placa",
  "plano",
  "polegar",
  "polícia",
  "ponte",
  "porto",
  "posto",
  "presa",
  "prova",
  "queda",
  "rainha",
  "raio",
  "raiz",
  "rato",
  "receita",
  "redentor",
  "rei",
  "roda",
  "romance",
  "segredo",
  "selo",
  "sentença",
  "serra",
  "serra",
  "servidor",
  "shakespeare",
  "sino",
  "solo",
  "sorvete",
  "tabuleiro",
  "taco",
  "teatro",
  "tela",
  "telescópio",
  "terra",
  "tocha",
  "tóquio",
  "torre",
  "toupeira",
  "tronco",
  "tubarão",
  "vela",
  "veneno",
  "verme",
  "vermelho",
  "vida",
  "volta",
  "washington",
];

module.exports = (_, res) => {
  res.json(randomizer(words).slice(0, 25));
};
