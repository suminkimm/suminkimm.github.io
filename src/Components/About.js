import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

function About() {
    return (
        <Container maxWidth="md">
          <Typography variant="h3">About Me</Typography>
          <Box fontWeight="fontWeightLight" fontSize="h5.fontSize" mt={2}>
              Hi there! Thank you for visiting my site 😊. 
              I'm currently pursuing a <span style={{color: '#3dace3'}}>B.S. in Computer Science </span> 
              at Rutgers University as well as a <span style={{color: '#3eab85'}}>Biology minor</span>. 
          </Box>
          
          <Box fontWeight="fontWeightLight" fontSize="h5.fontSize" mt={2}>
            Ever since I was young, I was interested in a variety of subjects: art, biology, chemistry, etc. 
            When I discovered computer science in my freshman year of college, I was amazed at how versatile the tech industry was.
            I could combine my passion for art in my frontend designs, my interest in research with data science,
            and bring abstract ideas to life by building concrete projects!
          </Box>

          <Box fontWeight="fontWeightLight" fontSize="h5.fontSize" mt={2}>
            As the Design Director of <span style={{color: '#cc0033'}}>HackRU</span> (our school's biannual hackathon) 
            and the Vice President of the <span style={{color: '#cc0033'}}>RU Mobile App Development Club</span>, 
            I've gotten the awesome chance to help students foster their own love for coding.
          </Box>

          <Box fontWeight="fontWeightLight" fontSize="h5.fontSize" mt={2}>
            But aside from coding, my other interests include: <span>🏃‍♀️ 🎸 🎨  🍣</span>
          </Box>
        </Container>
    )
}

export default About;