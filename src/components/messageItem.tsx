// React Native
import { View, StyleSheet } from "react-native";

// React Native Elements
import { Text } from "@rneui/themed";

export default function MessageItem({ item }:{ item:any }) {
  return (
    <View style={{ flex: 0, flexDirection: "row" }}>
      <View style={item.role === "assistant" ? styles.assistantContainer : styles.userContainer}>
        <Text style={item.role === "assistant" ? styles.assistantMessage : styles.userMessage}>
          {item.content}
        </Text>
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  userContainer: {
    flex: 0,
    width: "auto",
    marginLeft: "auto",
    padding: 16,
    backgroundColor: "#FF6205",
    borderRadius: 20
  },
  assistantContainer: {
    flex: 0,
    width: "auto",
    marginRight: "auto",
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 20
  },
  userMessage: {
    color: "#FFF",
    fontSize: 16
  },
  assistantMessage: {
    color: "#000",
    fontSize: 16
  }
});
