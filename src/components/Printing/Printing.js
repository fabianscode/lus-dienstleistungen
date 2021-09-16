import React from 'react';
import {Box, Container} from '@material-ui/core';
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import PrintingContent from "../PrintingContent/PrintingContent";

const styles = {
    root: {
        backgroundColor: "#1966d1",
        overflowX: "hidden",
        width: "100%"
    },
};

const Printing = () => (
    <div style={styles.root}>
        <AppBar/>
        <Container fixed>
            <Box height={140}/>
            <PrintingContent/>
            <Box height={140}/>
        </Container>
        <Footer/>
    </div>
);

Printing.propTypes = {};

Printing.defaultProps = {};

export default Printing;
