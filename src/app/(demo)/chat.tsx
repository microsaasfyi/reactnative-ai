// React
import { useState } from "react";

// React Native
import { Text, View, Button, StyleSheet } from "react-native";

// Utils
import { supabaseClient } from "@/utils/supabase";

export default function ChatScreen() {

  const [messages, setMessages] = useState<any>([{
    role: "user",
    content: "Selam!"
  }]);

  async function handleFunction() {
    const { data, error } = await supabaseClient.functions.invoke('openai-chat-completions', {
      body: {
        messages: messages
      }
    })
    if (error) console.log(error);
    setMessages([...messages, data.choices[0].message]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button onPress={handleFunction} title="Chat Test" />
      {messages.map((item:any, index:number) => {
        return <Text key={index}>{item.role}: {item.content}</Text>
      })}
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
