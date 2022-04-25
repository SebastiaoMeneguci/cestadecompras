import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";

import Texto from "../../../componentes/Texto";
import iconTopo from "../../../../assets/adaptive-icon.png";

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={iconTopo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (1024 / 1024) * width,
  },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "red",
    fontWeight: "bold",
    padding: 16,
  },
});
