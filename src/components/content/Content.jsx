import React, {Component} from 'react';
import axios from 'axios/index';
import PostCard from "../films/PostCard";

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {

        padding: '0 30px',
    },
});

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

class Content extends Component {
    componentWillMount() {

        const {setPoster} = this.props;

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
        return (

            <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  // className={classes.root}
                  spacing={2}
            >
                {
                    !isReady ? 'Загрузка...'
                        : poster.map((poster, i) => (
                            <Grid item xs={6} sm={3}>
                                <PostCard key={i} {...poster}/>
                            </Grid>
                        ))
                }
            </Grid>

        );
    }
}

export default Content;
