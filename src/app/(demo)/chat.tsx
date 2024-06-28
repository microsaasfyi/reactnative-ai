// React
import { useState } from "react";

// React Native
import { View, SafeAreaView, StyleSheet } from "react-native";

// React Native Elements
import { Input, Button } from '@rneui/themed';

import MessageItem from "./_components/messageItem";
import { invokeFunction } from "./actions";

export default function ChatScreen() {

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any>([{
    role: "asistant",
    content: "Hi! How can i help you?"
  }, {
    role: "user",
    content: "Hi!"
  }])

  async function handleSubmit(message:string) {
    setMessages([...messages, { role: "user", content: message }]);
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {messages && messages.map((item:any, index:number) => {
          return <MessageItem item={item} />
        })}
      </View >
      <View style={styles.formContainer}>
        <Input value={message} onChangeText={(text) => setMessage(text)} placeholder="Type a message" />
        <Button title="Send" onPress={() => handleSubmit(message)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    padding: 24
  },
  formContainer: {
    flex: 0,
    padding: 24
  }
});
