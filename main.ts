import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME;

if (!API_KEY) {
  throw new Error("OPENROUTER_API_KEY is missing in .env");
}

if (!MODEL_NAME) {
  throw new Error("MODEL_NAME is missing in .env");
}

async function generateResponse(prompt: string): Promise<string> {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  return data.choices[0].message.content;
}

async function main() {
  const prompt = process.argv.slice(2).join(" ");

  if (!prompt) {
    console.log('Usage: npm start "Your prompt here"');
    process.exit(1);
  }

  try {
    const result = await generateResponse(prompt);

    console.log("\nAI Response:\n");
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
