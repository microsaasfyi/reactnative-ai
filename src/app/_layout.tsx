// Expo
import { Stack } from "expo-router";

// Settings
export const unstable_settings = {
  initialRouteName: "(home)"
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ title: "Home", headerShown: true }} />
      <Stack.Screen name="(demo)" options={{ title: "Demo", headerShown: true }} />
    </Stack>
  );
};
