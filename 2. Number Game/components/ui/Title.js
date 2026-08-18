import { View, Text, StyleSheet } from 'react-native';

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
  },
  titleText: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});
