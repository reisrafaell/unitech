import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextComponent } from "../../components/micros";

export const Home = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Login");
  };
  return (
    <S.Container>
        <TextComponent variant={"Title1"} color={"red"}>Acesse o UniTech</TextComponent>

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Login</Text>
      </TouchableOpacity>
    </S.Container>
  );
};

