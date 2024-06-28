/*
* OpenAI Chat Completions
*/

// Packages
import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";

Deno.serve(async (req: Request) => {

  // Request
  const { messages } = await req.json();

  // OpenAI
  const openai = new OpenAI({
    apiKey: Deno.env.get('OPENAI_API_KEY')
  });

  try {

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages
    });

    //
    return new Response(
      JSON.stringify(response),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch(error) {
    console.log("error: ", error);
    return new Response(
      JSON.stringify({ message: "Server err." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

});
