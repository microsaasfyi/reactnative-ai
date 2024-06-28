// React Native
import { View } from "react-native";

// React Native Elements
import { Text, Avatar } from "@rneui/themed";

export default function MessageItem({ item }:{ item:any }) {
  return (
    <View style={{ flex: 0, padding: 6, gap: 8, flexDirection: "row" }}>
      <Avatar
        size={32}
        title={item.role === "asistant" ? "A" : "U"}
        containerStyle={{ backgroundColor: item.role === "asistant" ? "red" : "blue" }}
      />
      <Text>{item.content}</Text  >
    </View>
  )
};
