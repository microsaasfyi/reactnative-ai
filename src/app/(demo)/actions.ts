// Supabase
import { supabaseClient } from "@/utils/supabase";

export async function invokeFunction({ messages }:{ messages:any }) {
  //
  return await supabaseClient.functions.invoke('openai-chat', {
    body: {
      messages: messages
    }
  });
};
