import React from 'react';
import { Text, View } from 'react-native';

export default function TodoDisplay({ data }) {
  if (!data) return <Text style={{ fontSize: 16, color: 'gray' }}>No todo data found.</Text>;

  return (
    <View style={{ marginVertical: 15 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Fetched Todo:</Text>
      <Text style={{ fontSize: 16, marginTop: 5 }}>Title: {data.title}</Text>
      <Text style={{ fontSize: 16 }}>Completed: {data.completed ? 'Yes ✅' : 'No ❌'}</Text>
    </View>
  );
}
