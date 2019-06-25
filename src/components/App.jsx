import React, {Component} from 'react';
import axios from 'axios/index';
import './App.css';
import PostCard from "./PostCard";

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

class App extends Component {
    componentWillMount() {
        console.log(`Это пропсы `, this.props)
        const { setPoster } = this.props;
        axios.get('/db.json').then(({data}) => {
            setPoster(data);
        })
    }

    render() {
        // const classes = useStyles();
        const {poster, isReady} = this.props;
        // console.log(useStyles);
        return (
            <Container>
                <div className={useStyles.root}>
                    <Grid container spacing={3}>
                        {
                            !isReady ? 'Загрузка...'
                                : poster.map((poster, i) => (
                                    <PostCard useStyles={useStyles.gridList} key={i} {...poster}/>
                                ))
                        }
                    </Grid>
                </div>
            </Container>
        );
    }
}

export default App;
