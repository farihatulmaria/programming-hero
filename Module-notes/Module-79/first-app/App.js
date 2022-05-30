import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Countries from './Components/Countries/Countries';
export default function App() {
  return (
    <View style={styles.container}>
      <Countries></Countries>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});