async function generateText(prompt) {
  const response = await openai.createCompletion({
    model: 'gpt-4o',
    prompt: prompt,
    max_tokens: 150,
  });

  return response.data.choices[0].text.trim();
}

generateText('Erkläre die Vorteile von Node.js').then(console.log);