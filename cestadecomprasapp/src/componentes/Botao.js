import React from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";


import Texto from "./Texto";

export default function Botao({ children }) {
  return <TouchableOpacity style={estilos.botao} onPress={() => Alert.alert("Vai para a parte de pagamento")} >
    <Texto style={estilos.textoBotao}>{children}</Texto>
  </TouchableOpacity>;
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 8,
  },

  textoBotao: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
