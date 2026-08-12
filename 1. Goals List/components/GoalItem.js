//this component is used to render each goal item in the FlatList, it receives the itemData prop from the FlatList and displays the text of the goal item in a styled Text component

import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    //on clicking an item, delete it
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "rgba(255,255,255,0.2)" }}
        onPress={() => props.onDeleteGoal(props.itemData.item.id)}
        //for ios pressed effect
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>• {props.itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    padding: 5,
  },

  goalItemContainer: {
    backgroundColor: "#5f29cbd9",
    borderRadius: 5,
    minHeight: 30,
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  pressedItem: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});
