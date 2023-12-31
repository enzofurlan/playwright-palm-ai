const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.PALM_KEY;

var fs = require("fs");

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const promptString = process.argv;
const stopSequences = [];

client
  .generateText({
    // required, which model to use to generate the result
    model: MODEL_NAME,
    // optional, 0.0 always uses the highest-probability result
    temperature: 0.7,
    // optional, how many candidate results to generate
    candidateCount: 1,
    // optional, number of most probable tokens to consider for generation
    top_k: 40,
    // optional, for nucleus sampling decoding strategy
    top_p: 0.95,
    // optional, maximum number of output tokens to generate
    max_output_tokens: 1024,
    // optional, sequences at which to stop model generation
    stop_sequences: stopSequences,
    // optional, safety settings
    safety_settings: [
      { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
      { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
      { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
      { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
      { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
      { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 },
    ],
    prompt: {
      text: promptString,
    },
  })
  .then((result) => {
    const tsCode = result[0]["candidates"][0]["output"];
    const filePath = `helpers\/scratch_${Date.now()}.spec.js`;

    fs.writeFile(filePath, tsCode, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Formatted code written to file:", filePath);
      }
    });
  });
