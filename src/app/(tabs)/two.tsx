// React Native
import { Text, View, Button, StyleSheet } from "react-native";

// Utils
import { supabaseClient } from "@/utils/supabase";

export default function TabTwoScreen() {

  async function handleFunction() {
    const { data, error } = await supabaseClient.functions.invoke('openai-chat-completions', {
      body: {
        messages: [{
            role: "system",
            content: "You are a helpful assistant."
          }, {
          role: "user",
          content: "List Marvel avangers films."
        }]
      }
    })
    if (error) console.log(error);
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button onPress={handleFunction} title="Chat Test" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
