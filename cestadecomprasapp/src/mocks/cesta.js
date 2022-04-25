import iconFazenda from "../../assets/icon.png";

import tomate from "../../assets/icon.png";
import brocolis from "../../assets/icon.png";
import batata from "../../assets/icon.png";
import pepino from "../../assets/icon.png";
import abobora from "../../assets/icon.png";

const cesta = {
  topo: {
    titulo: "Cesta de compras",
  },

  detalhes: {
    nomeCesta: "Cesta de compras",
    logoFazenda: iconFazenda,
    nomeFazenda: "Sebastiao Meneguci Farm",
    descricao:
      "Olá, Essa é a sua cesta de compras da fazenda Sebastiao Meneguci Farm.",
    preco: "R$ 100,00",
    botao: "Comprar",
  },

  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
