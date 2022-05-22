import 'react-native-gesture-handler'
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native'

import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import theme from './src/global/styles/theme'
import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/routes/app.routes';
import { SignIn } from './src/screens/SignIn';
import { AuthContext } from './src/AuthContext';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <NavigationContainer>
        <AuthContext.Provider value={[]}>
          <SignIn />
        </AuthContext.Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}


