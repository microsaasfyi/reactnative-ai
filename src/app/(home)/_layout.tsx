// Expo
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="about" options={{ headerShown: false }} />
    </Tabs>
  );
};
