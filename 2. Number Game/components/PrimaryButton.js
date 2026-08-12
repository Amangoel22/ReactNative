import { View, Text, StyleSheet, Pressable } from 'react-native';

function PrimaryButton({ children }) {
  return (
    <Pressable>
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 5,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});