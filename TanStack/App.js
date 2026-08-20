import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

// Components
import QueryStatus from './components/QueryStatus';
import TodoDisplay from './components/TodoDisplay';
import RefetchButton from './components/RefetchButton';

const queryClient = new QueryClient();

// A simple fetch function that simulates network delay of 1.5 seconds
const fetchTodo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function TodoApp() {
  const { data, error, isPending, isFetching, refetch } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchTodo,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Simple useQuery Demo</Text>
        
        {/* Shows active status indicators */}
        <QueryStatus 
          isPending={isPending} 
          isFetching={isFetching} 
          error={error} 
        />
        
        {/* Displays data once loaded */}
        <TodoDisplay 
          data={data} 
        />
        
        {/* Simple button to trigger updates */}
        <RefetchButton 
          refetch={refetch} 
          isFetching={isFetching} 
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
