class FetchDataCommand extends Command {
  async run() {
    try {
      const data = await fetchDataFromAPI();
      this.log('Daten erfolgreich abgerufen:', data);
    } catch (error) {
      this.error('Fehler beim Abrufen der Daten:', error);
    }
  }
}