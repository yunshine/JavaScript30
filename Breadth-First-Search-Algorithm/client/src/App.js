import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

    useEffect(() => {
        console.log("there was a render that occurred, and useEffect ran...");


        fetch('http://localhost:8080/stuff')
            .then(res => {
                if (!res.ok) {
                    throw Error('There was an error, and data could not be fetched...');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.graphql);
                console.log(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("This fetch request has been aborted by abortController...");
                } else {
                    console.log("something else", err);
                }
            })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
