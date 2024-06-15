// Expo
import { Stack } from "expo-router";

// Settings
export const unstable_settings = {
  initialRouteName: "(tabs)"
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
};
