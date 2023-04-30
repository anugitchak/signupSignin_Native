import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screen/Welcome';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Verification from './src/screen/Verification';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen name="login" component={Login}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen name="signup" component={Signup}
          options={
            {
              headerShown: false
            }
          }

           />
           

<Stack.Screen name="home" component={Home}
          options={
            {
              headerShown: false
            }
          }
        />
        <Stack.Screen name="verification" component={Verification}
          options={
            {
              headerShown: false
            }
          }

           />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});