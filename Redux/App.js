import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store';
import AddTodo from './AddTodo';
import Todo from './Todo';

export default function App() {
  return (
    <Provider store={store}>
      {/* so that every component inside it can access Store   */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <AddTodo />
          <Todo />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f8fafc',
  },
});
