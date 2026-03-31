import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import CodeScreen from '../screens/CodeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
          backgroundColor: colors.card,
        },
        tabBarIcon: ({ color, size }) => {
          const icons: any = {
            Inicio: 'home-outline',
            Beneficios: 'pricetags-outline',
            Codigo: 'qr-code-outline',
            Perfil: 'person-outline',
          };

          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Beneficios" component={BenefitsScreen} />
      <Tab.Screen name="Codigo" component={CodeScreen} options={{ title: 'Código' }} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}