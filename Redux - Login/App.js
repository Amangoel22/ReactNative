import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

// AppContent handles conditional rendering based on Redux state.
// We must separate this into a subcomponent because the useSelector hook 
// requires the component to be rendered within the Redux Provider context.
function AppContent() {
  // Read isAuthenticated from the auth slice
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* 
        Conditional Rendering:
        If authenticated, show the HomeScreen, otherwise show the LoginScreen.
      */}
      {isAuthenticated ? <HomeScreen /> : <LoginScreen />}
    </SafeAreaView>
  );
}

// Root App Component
export default function App() {
  return (
    // The Provider component makes the Redux store available to any nested components
    // that need to access the Redux store or dispatch actions.
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Slate 900 background matches screens
  },
});
