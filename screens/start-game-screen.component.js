import React from "react";
import { Button, TextInput, View } from "react-native";
import PrimaryButtonComponent from "../components/primary-button.component";

const StartGameScreenComponent = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButtonComponent>Reset</PrimaryButtonComponent>
      <PrimaryButtonComponent>Confirm</PrimaryButtonComponent>
    </View>
  );
};

export default StartGameScreenComponent;
