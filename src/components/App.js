import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './layout/NavBar';
import Content from '../containers/content/Content'

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Content/>
        </BrowserRouter>
    );
}

export default App;
