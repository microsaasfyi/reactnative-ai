// Expo
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(home)"
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="(demo)/chat"
        options={{ headerTitle: "Chat", headerShown: true }}
      />
    </Stack>
  );
};
