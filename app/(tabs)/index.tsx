import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
export default function TabOneScreen() {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === "dark";
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    // Implement your logic to send the message
    console.log("Sending message:", inputText);
    // Clear the input after sending
    setInputText("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.chatContainer}>
        <Text>Chat messages go here</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: isDarkMode ? "white" : "black" }]}
          placeholder="Message"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          selectionColor={isDarkMode ? "white" : "black"}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Ionicons name={inputText ? "arrow-up-circle" : "mic-circle"} size={35} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
    // Add styles for your chat messages container
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  input: {
    flex: 1,
    height: 38,
    borderWidth: 1,
    borderColor: "#3A3B3C",
    borderRadius: 20,
    marginBottom: 30,
    marginRight: 4,
    paddingLeft: 15,
    fontSize: 18,
  },
  sendButton: {
    padding: 8,
    marginBottom: 30,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
