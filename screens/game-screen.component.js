import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import TitleComponent from "../components/ui/title-component";
import NumberContainerComponent from "../components/game/number-container.component";
import PrimaryButtonComponent from "../components/ui/primary-button.component";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBound = 1;
let maxBound = 100;

const GameScreenComponent = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", styles: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBound = currentGuess;
    } else {
      minBound = currentGuess + 1;
    }

    const newRndNum = generateRandomBetween(minBound, maxBound, currentGuess);
    setCurrentGuess(newRndNum);
  };

  return (
    <View style={styles.screen}>
      <TitleComponent>Opponent's Guess</TitleComponent>
      <NumberContainerComponent>{currentGuess}</NumberContainerComponent>
      <View>
        <Text>Higher or Lower</Text>
        <PrimaryButtonComponent onPress={() => nextGuessHandler("lower")}>
          -
        </PrimaryButtonComponent>
        <PrimaryButtonComponent onPress={() => nextGuessHandler("higher")}>
          +
        </PrimaryButtonComponent>
      </View>
    </View>
  );
};

export default GameScreenComponent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
