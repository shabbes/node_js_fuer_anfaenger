const config = (function () {
  const settings = {
    apiUrl: 'https://api.beispiel.de',
    timeout: 5000,
  };

  return {
    getApiUrl: () => settings.apiUrl,
    getTimeout: () => settings.timeout,
  };
})();

console.log(config.getApiUrl()); // 'https://api.beispiel.de'