import React from 'react';
import {Box, Container} from '@material-ui/core';
import OptionsCard from "../OptionsCard/OptionsCard";
import ExploreTeamCard from "../ExploreTeamCard/ExploreTeamCard";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

const styles = {
    root: {
        backgroundColor: "#1966d1",
        overflowX: "hidden",
        width: "100%"
    },
};

const Home = () => (
    <div style={styles.root}>
        <AppBar/>
        <Container fixed>
            <ExploreTeamCard/>
            <OptionsCard/>
            <Box height={50}/>
        </Container>
        <Footer/>
    </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
