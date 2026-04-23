import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Order from '../screens/OrderScreen';
import Map from '../screens/MapScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#C67C4E',
        tabBarInactiveTintColor: '#999',
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === 'Home') icon = 'home';
          else if (route.name === 'Order') icon = 'cart';
          else if (route.name === 'Map') icon = 'map';

          return <Ionicons name={icon} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}