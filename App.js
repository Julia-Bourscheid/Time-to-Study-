import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entrar from './views/Entrar';
import Tela1 from './views/Tela1';
import Tela2 from './views/Tela2';
import Tela3 from './views/Tela3';
import Tela4 from './views/Tela4';
import Tela5 from './views/Tela5';
import React from 'react';



const Stack = createStackNavigator();
export default function App() {
  return (
    <>
     <StatusBar style="auto" />
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Tela1' screenOptions={{ headerShown: true }}>
          <Stack.Screen options={{ title: 'Tela de início' }} name='Tela1' component={Tela1} />
          <Stack.Screen options={{ title: 'Crie sua conta' }} name='Tela2' component={Tela2} />
          <Stack.Screen options={{ title: 'Cadastro' }} name='Tela3' component={Tela3} />
          <Stack.Screen options={{ title: 'Pesquisa' }} name='Tela4' component={Tela4} />
          <Stack.Screen options={{ title: 'Detalhes' }} name='Tela5' component={Tela5} />
          <Stack.Screen options={{ title: 'Entrar' }} name='Entrar' component={Entrar} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'aut'
  },
});
