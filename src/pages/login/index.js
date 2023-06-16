import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { ButtonComponent, LinkComponent, Logo, TextComponent } from "../../components/micros";
import { InputComponent } from "../../components/micros";

export const Login = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Home");
  };
  return (
    <S.Container>
      <Logo/>
      <TextComponent variant={"Title1"}>Acesse o UniTech</TextComponent>
      <TextComponent variant={"Title2"} marginT={"10px 0 "}>
        Bem vindo de volta! Faça login usando seu e-mail para
        continuar conosco
      </TextComponent>
      <InputComponent   type={"text"} label="Seu Email"/>
      <InputComponent   label="Sua Senha"/>
      <ButtonComponent label={"Acessar"} backgroundColor={"#0F6FC1"} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
      <LinkComponent link={"Ainda não tem cadastro ?"} onPress={()=> navigation.navigate("Cadastro")}></LinkComponent>
    </S.Container>
  );
};
