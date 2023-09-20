import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleComponent from "../components/title-component";

const GameScreenComponent = () => {
  return (
    <View style={styles.screen}>
      <TitleComponent>Opponent's Guess</TitleComponent>
      <View>
        <Text>Higher or Lower</Text>
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
