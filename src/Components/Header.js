
import React from 'react';
import { AppBar, Toolbar, Grid, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link, animateScroll as scroll } from "react-scroll";
import Resume from '../assets/Su Min Kim Resume.pdf';

const useStyles = makeStyles({
    hyperlinks: {
        fontSize: 20, 
        textDecoration: "none", 
        color: "black", 
        paddingTop: 10,
        '&:hover': {
            color: "#3dace3"
        },
        cursor: "pointer"
    },
    rightHyperlinks: {
        fontSize: 20, 
        textDecoration: "none", 
        color: "black", 
        paddingTop: 10, 
        paddingLeft: 20,
        '&:hover': {
            color: "#3dace3"
        },
        cursor: "pointer"
    },
    
}); 


function Header() {

    const classes = useStyles();

    return (
        <AppBar position="sticky" color="clear" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        <a onClick={() => scroll.scrollToTop(500)} className={classes.hyperlinks}><strong>SU MIN KIM</strong></a>
                        
                        <Grid item>
                            <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={500}><a className={classes.hyperlinks}>Projects</a></Link>
                            <Link activeClass="active" to="About" spy={true} smooth={true} duration={500}><a className={classes.rightHyperlinks}>About</a></Link>
                            <a href={Resume} download className={classes.rightHyperlinks}>Resume</a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;