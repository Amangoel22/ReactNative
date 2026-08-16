import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import colors from "./util/colors";
import GameScreen from "./screens/GameScreen";

export default function App() {
  //handles, if number picked, start game, if not stays at start game screen
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  //if input -> GameScreen
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.rootScreen}>
        <LinearGradient
          colors={[colors.primary700, colors.headers]}
          style={StyleSheet.absoluteFill}
        />

        <ImageBackground
          source={require("./assets/images/background.png")}
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
  },

  backgroundImageStyle: {
    opacity: 0.3,
  },

  safeArea: {
    flex: 1,
  },
});
