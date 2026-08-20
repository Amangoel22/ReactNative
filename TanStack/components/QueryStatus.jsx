import React from 'react';
import { Text, View } from 'react-native';

export default function QueryStatus({ isPending, isFetching, error }) {
  return (
    <View style={{ marginVertical: 15 }}>
      <Text style={{ fontSize: 16 }}>⏳ isPending: {isPending ? 'TRUE' : 'FALSE'}</Text>
      <Text style={{ fontSize: 16 }}>🔄 isFetching: {isFetching ? 'TRUE' : 'FALSE'}</Text>
      {error && (
        <Text style={{ fontSize: 16, color: 'red', marginTop: 5 }}>
          ❌ Error: {error.message}
        </Text>
      )}
    </View>
  );
}
