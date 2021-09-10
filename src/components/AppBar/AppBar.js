import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        padding: 1,
        boxShadow: "0 0 40px 0px rgba(0,0,0,0.5)",
        position: "sticky",
        top: 0
    },
    innerContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        color: "#a8a8a8",
        fontSize: 20,
        alignItems: "center"
    },
    linkBox: {

    },
    links: {
        marginLeft: 12,
        marginRight: 12,
        fontSize: 15,
        fontWeight: 500,
        color: "#848788",
        textDecoration: "none",
        '&:hover': {
            color: "#605c5c",
            textDecoration: "underline",
            textDecorationThickness: 2,
            textDecorationColor: "#807c7c",
        },
    }
});

export default function AppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.innerContainer} alignItems="center">
                <h2 className={classes.title}>Lenhart & Specht Dienstleistungen</h2>
                <Box width={50}/>
                <div>
                    <a className={classes.links} href="/programming">
                        Programmieren
                    </a>
                    <a className={classes.links} href="/printing">
                        3D-Druck
                    </a>
                    <a className={classes.links} href="/design">
                        Design
                    </a>
                </div>
            </Grid>
        </div>
    );
}
