import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ButtonComponent } from "../../components/micros";

export const InitialPage = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Login");
  };
  return (
    <S.Container>
      <S.ImageHeader source={require("../../assets/logo.png")} />
      <ButtonComponent label={"Acessar"} backgroundColor={"#0F6FC1"} onPress={handleSubmit}/>
    </S.Container>
  );
};
