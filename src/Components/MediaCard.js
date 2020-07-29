import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, Button } from '@material-ui/core';

import Bloom from '../assets/Bloom.png'
import socialTrackerMainPic from '../assets/socialTrackerMainPic.png'
import RecipeBook from '../assets/RecipeBook.png'
import Emotinews from '../assets/Emotinews.png'

const useStyles = makeStyles({
    root: {
      width: 390,
    },
    media: {
      height: 400,
    },
});

function MediaCard({title, body, image, codeURL, modalOpen, isVideo, demo}) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {/* <CardActionArea onClick={() => {}}> */}
                <CardMedia
                    className={classes.media}
                    image={
                        image == "Bloom" ? Bloom 
                        : image == "socialTrackerMainPic" ? socialTrackerMainPic
                        : image == "RecipeBook" ? RecipeBook
                        : image == "Emotinews" ? Emotinews
                        : ""
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            {/* </CardActionArea> */}
            <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                <Button size="small" color="primary" onClick={() => window.location.href=codeURL}>
                View Code
                </Button>
                <Button size="small" color="primary" onClick={() => {
                        if (isVideo) {
                            modalOpen(true, demo)
                        } else {
                            window.location.href=demo
                        }
                    }}
                >
                View Demo
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediaCard