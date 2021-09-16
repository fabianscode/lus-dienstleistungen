import React from 'react';
import {Container} from '@material-ui/core';
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

const styles = {
    root: {
        backgroundColor: "#1966d1",
        overflowX: "hidden",
        width: "100%"
    },
};

const Join = () => (
    <div style={styles.root}>
        <AppBar/>
        <Container fixed>

        </Container>
        <Footer/>
    </div>
);

Join.propTypes = {};

Join.defaultProps = {};

export default Join;
