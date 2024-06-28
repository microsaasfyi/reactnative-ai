// Expo
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" options={{
          headerTitle: "Examples",
          headerShown: true
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerTitle: "Chat Demo",
          headerShown: true
        }}
      />
    </Stack>
  );
};
