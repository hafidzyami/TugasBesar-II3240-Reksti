import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView style={styles.container}
      source={{ uri: 'https://afmsweb.vercel.app/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
