import React from 'react';
import { Button, View } from 'react-native';

export default function RefetchButton({ refetch, isFetching }) {
  return (
    <View style={{ marginVertical: 15 }}>
      <Button
        title={isFetching ? "Fetching..." : "Refetch Data"}
        onPress={() => refetch()}
        disabled={isFetching}
      />
    </View>
  );
}
