import React from 'react';

import Paper from '@material-ui/core/Paper/index';
import Grid from '@material-ui/core/Grid/index';

const PostCard = ( poster, useStyles) => {
    const { image, title  } = poster;

    return (
        <Grid item xs={4}>
            <Paper className={useStyles}> <img src={image} alt={title}/></Paper>
        </Grid>

    );
};

export default PostCard;