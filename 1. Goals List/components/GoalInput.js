import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState(""); //use state
  //changes state
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  //empty input bar after goal is added
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter your goal..."
          placeholderTextColor="white"
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          {/* button */}
          <View style={styles.button}>
            <Button title="Add Goal" color="#96adb9" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#e60000" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#d2cbcb",
    borderRadius: 5, 
    backgroundColor: "#d8d6ddd9",
    width: "100%",
    padding: 7,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
