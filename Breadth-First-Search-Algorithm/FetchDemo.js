const url = "https://www.instagram.com/yun.chung/?__a=1";
const url = "https://graph.facebook.com/v3.2/{ UserIdNumber }?fields=biography%2Cid%2Cusername%2Cname%2Cfollowers_count%2Cwebsite&access_token={ EAACwX... }"
";

// const demo = fetch(url)
//     .then(response => {
//         response.json();
//         console.log(response)
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));



setTimeout(() => {
    // fetch('http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=aa4776c71ca344dc28c64a8f12c1c4ec')
    fetch(url)
        .then(res => {
            if (!res.ok) {
                console.log("fetching...");
                throw Error('There was an error, and data could not be fetched...');
            }
            return res.json();
        })
        .then(data => {
            // setData(data);
            // setIsLoading(false);
            // setError(null);
            console.log("Data From Fetch: ", data);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log("This fetch request has been aborted by abortController...");
            } else {
                // setIsLoading(false);
                // setError(err.message);
                console.log("there was an error...", err, err.message);
            }
        });
}, 350);