// React Native
import { FlatList, Button, TextInput, View, SafeAreaView, StyleSheet } from "react-native";

// Components
import MessageItem from "@/components/messageItem";

// Hooks
import useChat from "@/hooks/useChat";

export default function ChatScreen() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <MessageItem item={item} />}
      />
      <View style={styles.formContainer}>
        <TextInput
          value={input}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSubmit}
          placeholder="Type a message"
          style={{ width: "85%", backgroundColor: "#F5F5F5" }}
        />
        <Button
          title="Send"
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    gap: 12
  },
  formContainer: {
    flex: 0,
    flexDirection: "row",
    padding: 24
  }
});
