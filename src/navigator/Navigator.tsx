import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false,
          cardStyle: {
              backgroundColor: 'white'
          }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
    </Stack.Navigator>
  );
}