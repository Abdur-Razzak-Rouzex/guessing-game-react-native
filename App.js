import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreenComponent from "./screens/start-game-screen.component";
import { useState } from "react";
import GameScreenComponent from "./screens/game-screen.component";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber ? (
            <GameScreenComponent />
          ) : (
            <StartGameScreenComponent onPickNumber={pickedNumberHandler} />
          )}
        </SafeAreaView>
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
