// Expo
import { useRouter } from "expo-router";

// React Native
import { View, Pressable } from "react-native";

// React Native Elements
import { Card, Text } from '@rneui/themed';

export default function TabOneScreen() {

  const router = useRouter();

  return (
    <View>
      <Pressable onPress={() => router.push("chat")}>
        <Card containerStyle={{ borderRadius: 10 }}>
          <Card.Title style={{ alignSelf: "flex-start" }}>Basic Chat</Card.Title>
          <Text>with OpenAI chat completion</Text>
        </Card>
      </Pressable>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title style={{ alignSelf: "flex-start" }}>Asistant Chat</Card.Title>
        <Text>with OpenAI Asistant</Text>
      </Card>
    </View>
  );
};
