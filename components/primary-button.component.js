import React from "react";
import { View, Text } from "react-native";

const PrimaryButtonComponent = ({ children }) => {
  console.log("Children: ", children);
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButtonComponent;
