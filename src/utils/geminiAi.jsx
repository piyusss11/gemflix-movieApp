import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./constants";

// Access your API key as an environment variable.
export const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// async function run() {
//   // Choose a model that's appropriate for your use case.
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "Write a story about a magic backpack."

//   const result = await model.generateContent(prompt);
//   const response = result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();