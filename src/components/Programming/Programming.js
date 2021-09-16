import React from 'react';
import {Box, Container} from '@material-ui/core';
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import ProgrammingContent from "../ProgrammingContent/ProgrammingContent";

const styles = {
    root: {
        backgroundColor: "#1966d1",
        overflowX: "hidden",
        width: "100%"
    },
};

const Programming = () => (
    <div style={styles.root}>
        <AppBar/>
        <Container fixed>
            <Box height={140}/>
            <ProgrammingContent/>
            <Box height={140}/>
        </Container>
        <Footer/>
    </div>
);

Programming.propTypes = {};

Programming.defaultProps = {};

export default Programming;
