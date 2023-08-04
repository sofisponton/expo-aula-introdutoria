import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });

  if (!fontsLoaded) {
    return <View><Text>Não carregou a fonte!</Text></View>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2º Informática</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Inter-Black',
    fontSize: 30
  },
});
