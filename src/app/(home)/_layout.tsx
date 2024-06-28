// Expo
import { Tabs } from "expo-router";

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
          headerShown: true
        }}
      />
      <Tabs.Screen
        name="examples"
        options={{
          title: "Examples",
          headerShown: true
        }}
      />
    </Tabs>
  );
};
