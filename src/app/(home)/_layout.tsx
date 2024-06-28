// Expo
import { Tabs } from "expo-router";

// React Native Elements
import { Icon } from '@rneui/themed';

// Settings
export const unstable_settings = {
  initialRouteName: "(home)"
};

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => <Icon type="feather" name="home" color={color} size={size} />,
          headerShown: true
        }}
      />
      <Tabs.Screen
        name="examples"
        options={{
          title: "Examples",
          tabBarIcon: ({ focused, color, size }) => <Icon type="feather" name="message-square" color={color} size={size} />,
          headerShown: true
        }}
      />
    </Tabs>
  );
};
