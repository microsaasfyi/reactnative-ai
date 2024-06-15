/*
* OpenAI Chat Completions
*/

// Packages
import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";

Deno.serve(async (req) => {

  // Env
  const apiKey = Deno.env.get('OPENAI_API_KEY');

  // Request
  const { messages } = await req.json();

  // OpenAI
  const openai = new OpenAI({
    apiKey: apiKey
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: messages
  });

  //
  return new Response(
    JSON.stringify(response),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

});
