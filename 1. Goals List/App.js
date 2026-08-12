import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([
    {
      id: "1",
      text: "Finish React Native course",
    },
  ]); 
  // setting initial state of the list with some values

  const handleModal = () => {
    setModalIsVisible(true);
  };

  const handleCancel = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    handleCancel(); //close modal after adding goal
  };

  const deleteGoalHandler = (id) => {
    console.log("Deleted");
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" /> 
      {/* status bar to light mode, so that the text is visible on the dark background */}
      {/* main view */}
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#764ccad9" onPress={handleModal} />
        {/* input container */}
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={handleCancel}
        />
        {/* list view */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            //component that will be rendered for each item in the list, we are passing the itemData as a prop to the GoalItem component
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} onDeleteGoal={deleteGoalHandler} />
            )}
            //tells the list how to extract a unique key for each item in the list as we used id not key as variable name in the state array
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 20,
  },

  goalsContainer: {
    flex: 4,
    borderWidth: 1,
    borderColor: "#d2cbcbb5",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
