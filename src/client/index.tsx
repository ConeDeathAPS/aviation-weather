import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from "../components/App";

render(
    <Router>
        <App message={'Client'} />
    </Router>,
    document.getElementById('app-container')
);