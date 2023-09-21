import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionTextComponent = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionTextComponent;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
