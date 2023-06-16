import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent, LinkComponent, Logo, TextComponent } from "../../components/micros";
import { InputComponent } from "../../components/micros";

export const Cadastro = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Home");
  };
  return (
    <S.Container>
      <Logo/>
      <TextComponent variant={"Title1"}>Cadastre-se com seu Email</TextComponent>
      <TextComponent variant={"Title2"} marginT={"10px 0 "}>
      Comece a utilizar nossa plataforma, inscrevendo-se em nosso aplicativo!
      </TextComponent>
      <InputComponent   type={"text"} label="Seu Nome"/>
      <InputComponent   type={"text"} label="Seu Email"/>
      <InputComponent   label="Sua Senha"/>
      <InputComponent   label="Confirme a Senha"/>
      <ButtonComponent label={"Cadastrar"} backgroundColor={"#0F6FC1"} marginT={"10px 0 0 0"} onPress={handleSubmit}/>
      <LinkComponent link={"Voltar"} onPress={()=> navigation.navigate("Login")}></LinkComponent>

    </S.Container>
  );
};
