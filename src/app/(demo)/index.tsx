// React Native
import { Text, View, Pressable, StyleSheet } from "react-native";

// Expo
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* Demo */}
      <Link href="/chat" asChild>
        <Pressable style={styles.card}>
          <View>
            <Text style={styles.title}>Chat</Text>
            <Text style={styles.description}>OpenAI chat demo</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 28
  },
  card: {
    width: "100%",
    height: 96,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    marginVertical: 8,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: '#777'
  }
});
