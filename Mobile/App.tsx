import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screen/Home';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider theme={THEME}>
      <SafeAreaProvider
        style={{
          backgroundColor: '#1A1A1A',
        }}
      >
        <Home/>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}


