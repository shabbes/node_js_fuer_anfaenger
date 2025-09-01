const suggestions = ['apple', 'banana', 'grape', 'orange', 'watermelon'];

document.getElementById('input').addEventListener('input', (event) => {
  const input = event.target.value.toLowerCase();
  const matches = suggestions.filter((item) => item.startsWith(input));
  displaySuggestions(matches);
});

function displaySuggestions(matches) {
  // Logik zur Anzeige der Vorschläge
}