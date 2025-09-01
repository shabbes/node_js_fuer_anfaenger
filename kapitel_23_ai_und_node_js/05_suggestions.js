const express = require('express');
const app = express();

app.get('/autocomplete', (req, res) => {
  const query = req.query.q.toLowerCase();
  const matches = getSuggestionsFromModel(query);
  res.json(matches);
});

function getSuggestionsFromModel(query) {
  // Pseudocode zur Interaktion mit einem KI-Modell
  return ['suggestion1', 'suggestion2', 'suggestion3'];
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});