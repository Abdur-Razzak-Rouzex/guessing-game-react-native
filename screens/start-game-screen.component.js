import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButtonComponent from "../components/ui/primary-button.component";
import Colors from "../constants/colors";
import TitleComponent from "../components/ui/title-component";
import CardComponent from "../components/ui/card.component";
import InstructionTextComponent from "../components/ui/instruction-text.component";

const StartGameScreenComponent = ({ onPickNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (textInputValue) => {
    setEnteredValue(textInputValue);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );

      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <TitleComponent>Guess My Number</TitleComponent>
      <CardComponent>
        <InstructionTextComponent>Enter a Number</InstructionTextComponent>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtonComponent onPress={resetInputHandler}>
              Reset
            </PrimaryButtonComponent>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtonComponent onPress={confirmInputHandler}>
              Confirm
            </PrimaryButtonComponent>
          </View>
        </View>
      </CardComponent>
    </View>
  );
};

export default StartGameScreenComponent;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
