import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../util/colors"

function StartGameScreen({onPickNumber}) {
  const [userInput, setUserInput] = useState("");

  function confirmInputHandler() {
    const chosenNumber = parseInt(userInput);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert of number being invalid
      Alert.alert("Invalid Input", "Please enter a valid number between 1 and 99.", [{ text: "Okay", style: "cancel", onPress: resetInputHandler }]);
      return;
    }
    console.log("Valid number: " + chosenNumber);
    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setUserInput("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        value={userInput}
        onChangeText={(input) => setUserInput(input)}
      />
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        {/* CUSTOM BUTTONS */}
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={{ flex: 1}}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor:colors.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  numberInput: {
    height: 70,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.headers,
    borderBottomWidth: 2,
    color: colors.headers,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
