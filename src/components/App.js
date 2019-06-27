import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './layout/NavBar';
import Content from '../containers/content/Content'
import Container from '@material-ui/core/Container';

function App() {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <NavBar/>
                <Content/>
            </Container>

        </BrowserRouter>
    );
}

export default App;
