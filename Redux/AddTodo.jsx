// 20. Now using these in components - useDispatch and useSelector
//
//    AddTodo.jsx (just has a form to input new tasks)

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
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
        placeholder="Add a new todo..."
        placeholderTextColor="#888"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Add Todo" onPress={addtodoHandler} color="#5b21b6" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    color: '#000',
  },
});
