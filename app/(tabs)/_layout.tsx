import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';
export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
          //Oculta los textos o etiquetas
          tabBarShowLabel: false,
          //Oculta el header
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            position: 'absolute',
            elevation: 0,
            height: 40,
            paddingBottom: 8,
          }
        }}
        >
        <Tabs.Screen name="index"
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>          
          }}
        />
        <Tabs.Screen name="bookmarks"
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => <Ionicons name="bookmark" size={size} color={color}/>          
        }}
        />
        <Tabs.Screen name="create"
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name="add-circle" size={size} color={COLORS.primary}/>          
          }}
        />
        <Tabs.Screen name="notifications"
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name="notifications" size={size} color={color}/>          
          }}        
        />
        <Tabs.Screen name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color}/>          
          }}
        />
    </Tabs>
  );
}