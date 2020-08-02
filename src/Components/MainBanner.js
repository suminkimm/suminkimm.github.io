import React from 'react';
import { Box, Typography, Container, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typewriter from 'typewriter-effect';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    clickableIcon: {
      '&:hover': {
        color: "#3dace3"
      },
    },
}));

function MainBanner() {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
          <Box pt={15}>
            <Box mb={5}>
              <Typography variant="h2"><span>👋</span> , I'm</Typography>
              <Typography variant="h1"><strong>Su Min</strong></Typography>
              <Typography variant="h3" style={{color: "#6dbce3"}}>
              <Typewriter
                options={{
                  strings: ['Who Am I?', 'Creative Developer', 'Aspiring Artist', 'Fitness Junkie'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </Typography>
            </Box>
            <Typography variant="h5">I'm an aspiring software engineer and mobile/web app developer</Typography>
            <Typography variant="h5">with an avid interest in design.</Typography>
            <Box mt={2}>
              <Typography variant="h5" color="secondary">@ Rutgers University - New Brunswick</Typography>
            </Box>
            <Box 
              mt={5} 
              mb={20}
              flexDirection="row"
              display="flex"
              alignItems="flex-start"
            >
              <Box pr={5}>
                <GitHubIcon 
                    className={classes.clickableIcon}
                    fontSize="large" 
                    onClick={event =>  window.location.href='https://github.com/suminkimm'}
                />
              </Box>
              <Box pr={5}>
                <LinkedInIcon 
                    className={classes.clickableIcon}
                    fontSize="large" 
                    onClick={event =>  window.location.href='https://linkedin.com/in/su-min-kim'}
                />
              </Box>  
              <Box pr={5}>
                <a href="mailto:kims622@gmail.com" style={{color: 'black'}}>
                  <EmailIcon 
                      className={classes.clickableIcon}
                      fontSize="large" 
                  />
                </a>
              </Box>  
            </Box>
          </Box>
        </Container>
    )
}

export default MainBanner;