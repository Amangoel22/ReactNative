// 20. Now using these in components - useDispatch and useSelector
//
//    AddTodo.jsx (just has a form to input new tasks)

import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  // Dispatch -> uses reducer -> changes value in store

  const addtodoHandler = () => {
    // Note: In React Native, we don't have form submits, so e.preventDefault() is not needed.
    if (input.trim() === '') return;
    dispatch(addTodo(input)); // input jo chahiye
    setInput(''); //basically clean jo user ne bhara for next
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#9ca3af"
        value={input}
        onChangeText={setInput}
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        android_ripple={{ color: '#c084fc' }}
        onPress={addtodoHandler}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    gap: 12,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#f8fafc',
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    color: '#1e293b',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: '#7c3aed',
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#7c3aed',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
