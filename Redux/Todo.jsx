// 21. Now viewing todos - useSelector with store
//
//    Todo.jsx
//    import {useDispatch, useSelector} from react-redux; //delete krna h koi agar to dispatch kroge
//    import {removeTodo} from file; //aur dispatch ka fn yha h

import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './todoSlice';

export default function Todo() {
  // useSelector: select value from store
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Todos:</Text>
      
      {/* 5. Solution to above: FlatList -> renders items on screen */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            
            {/* 6. Pressable component is used to make an object pressable in a react app */}
            <Pressable
              style={({ pressed }) => [
                styles.deleteButton,
                pressed && styles.pressedItem
              ]}
              onPress={() => dispatch(removeTodo(item.id))}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks added yet!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3e8ff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#e9d5ff',
  },
  todoText: {
    fontSize: 16,
    color: '#1e1b4b',
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  pressedItem: {
    opacity: 0.7,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    fontStyle: 'italic',
  },
});
