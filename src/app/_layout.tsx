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
        name="(home)"
        options={{
          title: "Home",
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="(demo)"
        options={{
          title: "Examples",
          headerShown: false
        }}
      />
    </Tabs>
  );
};
