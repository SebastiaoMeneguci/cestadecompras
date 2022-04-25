import React from "react";
import { StyleSheet, Image, View } from "react-native";

import Botao from "../../../componentes/Botao";

import Texto from "../../../componentes/Texto";

export default function Detalhes({
  nomeCesta,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nomeCesta}>{nomeCesta}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.logoFazenda} />
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      <Botao>
        <Texto>{botao}</Texto>
      </Botao>
    </>
  );
}

const estilos = StyleSheet.create({
  nomeCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  logoFazenda: {
    width: 32,
    height: 32,
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
