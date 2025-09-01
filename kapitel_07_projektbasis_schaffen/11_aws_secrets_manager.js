import AWS from 'aws-sdk';

const client = new AWS.SecretsManager({
  region: 'us-west-2',
});

async function getSecretValue(secretName) {
  try {
    const data = await client.getSecretValue({ SecretId: secretName }).promise();

    if (data.SecretString) {
      return JSON.parse(data.SecretString);
    }
  } catch (err) {
    console.error(`Error retrieving secret ${secretName}:`, err);
  }
}

(async () => {
  const secrets = await getSecretValue('mySecretId');

  console.log('Database password:', secrets.DB_PASSWORD);
})();