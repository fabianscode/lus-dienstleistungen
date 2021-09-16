import React from 'react';
import {Box, Container} from '@material-ui/core';
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import DesignContent from "../DesignContent/DesignContent";

const styles = {
    root: {
        backgroundColor: "#1966d1",
        overflowX: "hidden",
        width: "100%"
    },
};

const Design = () => (
    <div style={styles.root}>
        <AppBar/>
        <Container fixed>
            <Box height={140}/>
            <DesignContent/>
            <Box height={140}/>
        </Container>
        <Footer/>
    </div>
);

Design.propTypes = {};

Design.defaultProps = {};

export default Design;
