// 21. Now viewing todos - useSelector with store
//
//    Todo.jsx
//    import {useDispatch, useSelector} from react-redux; //delete krna h koi agar to dispatch kroge
//    import {removeTodo} from file; //aur dispatch ka fn yha h

import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './todoSlice';

// Animated Todo Item Component for entry/exit animation
function TodoItem({ item, onDelete }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{item.text}</Text>
        
        {/* 6. Pressable component is used to make an object pressable in a react app */}
        <Pressable
          style={({ pressed }) => [
            styles.deleteButton,
            pressed && styles.pressedItem
          ]}
          android_ripple={{ color: '#fca5a5' }}
          onPress={onDelete}
        >
          <Text style={styles.deleteButtonText}>✕</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

export default function Todo() {
  // useSelector: select value from store
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks List</Text>
      
      {/* 5. Solution to above: FlatList -> renders items on screen */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={() => dispatch(removeTodo(item.id))} />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>All caught up! 🎉</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  listContent: {
    paddingBottom: 24,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
    flex: 1,
    paddingRight: 12,
  },
  deleteButton: {
    backgroundColor: '#fef2f2',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#ef4444',
    fontWeight: 'bold',
    fontSize: 14,
  },
  pressedItem: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }],
  },
  emptyText: {
    textAlign: 'center',
    color: '#94a3b8',
    marginTop: 40,
    fontSize: 16,
    fontWeight: '600',
  },
});
