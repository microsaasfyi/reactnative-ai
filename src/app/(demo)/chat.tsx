// React
import { useState } from "react";

// React Native
import { Text, View, TextInput, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";

// Utils
import { supabaseClient } from "@/utils/supabase";

export default function ChatScreen() {

  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<any>([]);

  async function sendMessage() {
    setInputText("");
    const { data, error } = await supabaseClient.functions.invoke('openai-chat-completions', {
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

  const renderItem = ({ item, index }:{ item:any, index:number }) => (
    <View key={index} style={[styles.messageContainer, item.role === 'user' ? styles.userMessage : styles.otherMessage]}>
      <Text style={[styles.messageContainer, item.role === 'user' ? styles.userMessageText : styles.otherMessageText]}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.conversations}
        data={messages}
        renderItem={renderItem}
        inverted= {false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  conversations: {
    padding: 6
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  messageContainer: {
    padding: 4,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5ea',
  },
  userMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#000',
  },
});
