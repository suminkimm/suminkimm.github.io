import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, makeStyles, Button } from '@material-ui/core';

import Bloom from '../assets/Bloom.png'
import socialTrackerMainPic from '../assets/socialTrackerMainPic.png'
import Emotinews from '../assets/Emotinews.png'
import c2k from '../assets/c2k.png'

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
                <CardMedia
                    className={classes.media}
                    image={
                        image === "Bloom" ? Bloom 
                        : image === "socialTrackerMainPic" ? socialTrackerMainPic
                        : image === "Emotinews" ? Emotinews
                        : image === "c2k" ? c2k
                        : image === ""
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
                {isVideo ? "View Demo" : "View Details"}
                </Button>
            </CardActions>
        </Card>
    )
}

export default MediaCard