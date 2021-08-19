import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import MediaCard from './MediaCard';
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';

function Projects() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [videoId, setVideoId] = React.useState("");

    const modalOpen = (isOpen, videoId) => {
        setIsOpen(isOpen)
        setVideoId(videoId)
    }

    const projectsArray = [
        {
            title: "Computers2Kids",
            body: "A React Native mobile application for Computers2Kids, a nonprofit that recycles donated computers for those in need.",
            image: "c2k",
            codeURL: "https://github.com/dfgc2k",
            isVideo: false,
            demo: "https://developforgood.medium.com/computers2kids-a-mobile-application-to-better-enable-low-income-families-to-gain-access-to-c2ks-b0b9e0c173db"
        }, 
        {
            title: "SocialTracker",
            body: "A React Native mobile application that allows the user to monitor his/her social time and social circle.",
            image: "socialTrackerMainPic",
            codeURL: "https://github.com/suminkimm/socialTrackerPublicApp",
            isVideo: true,
            demo: "890lO-UDxJA"
        }, 
        {
            title: "Bloom",
            body: "A Swift mobile application that lets you classify a flower by taking its picture and test your flower knowledge.",
            image: "Bloom",
            codeURL: "https://github.com/suminkimm/Bloom",
            isVideo: true,
            demo: "pHk3TvWhmfA"
        },
        {
            title: "Emotinews",
            body: "A Swift mobile application that allows the user to search for a topic to see others' opinions on it using the Twitter Sentiment Dataset, and also allows the user to read more news articles about it.",
            image: "Emotinews",
            codeURL: "https://github.com/suminkimm/Emotinews",
            isVideo: true,
            demo: "Lv3cRtqh5Qg"
        },
    ]

    return (
        <Container maxWidth="md">
            <Typography variant="h3">Projects</Typography>
            <Box mt={5} mb={15}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="space-between" spacing={5}>
                            {projectsArray.map((value, index) => {
                                var title = projectsArray[index].title;
                                var body = projectsArray[index].body;
                                var image = projectsArray[index].image;
                                var codeURL = projectsArray[index].codeURL;
                                var isVideo = projectsArray[index].isVideo;
                                var demo = projectsArray[index].demo;
                                return (
                                    <Grid key={index} item>
                                        <MediaCard 
                                            title={title} 
                                            body={body} 
                                            image={image} 
                                            codeURL={codeURL} 
                                            isVideo={isVideo}
                                            demo={demo}
                                            modalOpen={modalOpen}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
        </Container>
    )
}

export default Projects;