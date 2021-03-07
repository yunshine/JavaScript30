const getTodos = (resource, callbackFunction) => {
    // the XMLHttpRequest object is old, but it also works with JSON and other data types like XML or plain text...
    const request = new XMLHttpRequest();

    // the 'readystatechange' event fires whenever there is a change in the state or phase of the request...
    // We can use 'readystatechange' to determine when the request is completed AND access the data that we get back...
    request.addEventListener('readystatechange', () => {
        // FYI there are 4 phases or states of the request...
        console.log("Request: ", request);
        console.log("request.readyState: ", request.readyState);

        // if the request state/phase is 4, that means it is done (even if there is an error)...
        // so, we also need to check that there weren't any errors with the request (status 200). Only then will there be a responseText/data...
        if (request.readyState === 4 && request.status === 200) {
            // Again, request.responseText is the data that you've gotten back once the request state/phase is at 4/done...
            // callbackFunction(undefined, request.responseText);

            // dealing with JSON...
            const data = JSON.parse(request.responseText);
            callbackFunction(undefined, data);
        } else if (request.readyState === 4) {
            callbackFunction('Error. Could not fetch data...', undefined);
        }
    });

    // How to send a request to get data...
    // ==================================================================
    // request.open tells our request what type of request it is (GET) and where to get that data from/where to send the request...
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    // accessing my own JSON file...
    request.open('GET', resource);
    // request.open sets up the request, and request.send sends the request...
    request.send();
};

// These console.logs below show that the getTodos callback function is asynchronous and not blocking...
console.log(1);
console.log(2);

// How to handle errors and/or data that has been successfully fetched...
getTodos('json/todos.json', (err, data) => {
    console.log("Callback fired from inside the callbackFunction...");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        // if you have multiple json files or apis or sources of data you need asynchronously, you could start nested  callback hell here like so...
        getTodos('json/shoppingList.json', (err, data) => {
            console.log("callback hell 1: ", data);
        })
    }
});

console.log(3);
console.log(4);
