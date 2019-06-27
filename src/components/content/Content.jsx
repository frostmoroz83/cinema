import React, {Component} from 'react';
import axios from 'axios/index';
import PostCard from "../films/PostCard";

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
// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


class Content extends Component {
    componentWillMount() {

        const { setPoster } = this.props;

        axios.get('/db.json').then(({data}) => {
            const date = new Date(new Date(Date.now() + 7 * 86400000).toGMTString());
            document.cookie = "db=" + JSON.stringify(data) + "; path=/; expires=" + date.toUTCString();
            let cook = JSON.parse(getCookie('db'));
            setPoster(cook);
            console.log(cook);
        });
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

export default Content;
