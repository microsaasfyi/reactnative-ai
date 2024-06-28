// React Ntive
import { Platform } from "react-native";

// Expo
import { Stack } from "expo-router";

// React Native UI
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

export default function TabLayout() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
