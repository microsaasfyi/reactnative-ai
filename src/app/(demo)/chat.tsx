// React
import { useState } from "react";

// React Native
import { Text, View,FlatList, SafeAreaView, StyleSheet } from "react-native";

// React Native Elements
import { Input, Button } from '@rneui/themed';

// Utils
import { supabaseClient } from "@/utils/supabase";

export default function ChatScreen() {

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<any>([{
    role: "asistant",
    content: "hi!"
  }]);

  async function sendMessage() {
    setInputText("");
    const { data, error } = await supabaseClient.functions.invoke('openai-chat', {
      body: {
        messages: [...messages, {
          role: "user",
          content: inputText
        }]
      }
    })
    if (error) console.log(error);
    setMessages([...messages, { role: "user", content: inputText }, data.choices[0].message]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{  }}>
        {messages && messages.map((item:any, index:number) => {
          return <Text key={index}>{item.content}</Text>
        })}
      </View >
      <View style={{  }}>
        <Input value={inputText} onChangeText={setInputText} placeholder="Type a message" />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
