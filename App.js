import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreenComponent from "./screens/start-game-screen.component";
import { useState } from "react";
import GameScreenComponent from "./screens/game-screen.component";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    console.log("the picked number; ", pickedNumber);
    setUserNumber(pickedNumber);
  };

  return (
    <LinearGradient style={styles.rootScreen} colors={["#d54f4f", "#b89522"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        {userNumber ? (
          <GameScreenComponent />
        ) : (
          <StartGameScreenComponent onPickNumber={pickedNumberHandler} />
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.2,
  },
});
