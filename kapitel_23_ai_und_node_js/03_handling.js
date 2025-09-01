async function generateTextWithHandling(prompt) {
  try {
    const response = await openai.createCompletion({
      model: 'gpt-4o',
      prompt: prompt,
      max_tokens: 150,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Fehler bei der Textgenerierung:', error);

    return 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
  }
}

generateTextWithHandling('Erkläre die Vorteile von Node.js').then(console.log);