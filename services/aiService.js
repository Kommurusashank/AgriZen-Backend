const { Ollama } = require("ollama");

const ollama = new Ollama({
  host: "http://127.0.0.1:11434",
});

async function askAI(question) {
  const response = await ollama.chat({
    model: "llama3.1:8b",
    messages: [
      {
        role: "system",
        content: "You are an agriculture assistant.",
      },
      {
        role: "user",
        content: question,
      },
    ],
  });

  return response.message.content;
}

module.exports = askAI;