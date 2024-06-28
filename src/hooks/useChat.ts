// React
import { useState, useCallback } from 'react';

// Lib
import { supabaseClient } from "@/utils/supabase"

type Message = {
  role: string,
  content: string
};

const useChat = () => {

  // States
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  // Send Message
  async function sendMessage(text:string) {
    const updatedMessages = [...messages, { role: "user", content: text }];

    setMessages(updatedMessages);

    const { data, error } = await supabaseClient.functions.invoke('openai-chat', {
      body: {
        messages: updatedMessages
      }
    });

    if (error) return console.log(error);
    if (data) setMessages((prevMessages: any) => [...prevMessages, data.choices[0].message])
    return;
  };

  // Handle Input Change
  const handleInputChange = (text:string) => {
    setInput(text);
  };

  // Handle Submit
  const handleSubmit = () => {
    sendMessage(input);
    setInput("");
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit
  };
};

export default useChat;
