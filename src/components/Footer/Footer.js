import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box, Divider, Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        padding: 1,
        boxShadow: "0 0 40px 0px rgba(0,0,0,0.1)",
    },
    innerContainer: {
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
    },
    innerContainer2: {
        alignItems: "center",
        marginLeft: 40,
        marginRight: 40,
    },
    list: {
        display: "flex",
        listStyleType: "none",
        marginLeft: 40,
        marginRight: 12,
    },
    list2: {
        display: "flow"
    },
    title: {
        color: "#414141",
        fontSize: 16,
        fontWeight: 400,
        marginLeft: 12
    },
    name: {
        color: "#a8a8a8",
        fontSize: 18,
    },
    links: {
        marginLeft: 12,
        marginRight: 12,
        fontSize: 14,
        fontWeight: 400,
        color: "#575454",
        textDecoration: "none",
        '&:hover': {
            color: "#1a72e6",
        },
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box height={30}/>
            <div className={classes.list}>
                <div>
                    <h3 className={classes.title}>Dienstleistungen</h3>
                    <div className={classes.list2}>
                        <a className={classes.links} href="/programming">Programmieren</a>
                        <a className={classes.links} href="/printing">3D-Druck</a>
                        <a className={classes.links} href="/design">Design</a>
                    </div>
                </div>
                <Box width={50}/>
                <div>
                    <h3 className={classes.title}>Team</h3>
                    <div className={classes.list2}>
                        <a className={classes.links} href="/team">Das Team</a>
                    </div>
                </div>
            </div>
            <Box height={30}/>
            <Divider variant="middle"/>
            <Box height={30}/>
            <Grid container className={classes.innerContainer}>
                <h2 className={classes.name}>Lenhart & Specht Dienstleistungen</h2>
                <div className={classes.innerContainer}>
                    <a className={classes.links} href="/team">Instagram</a>
                    <a className={classes.links} href="/team">Twitter</a>
                    <a className={classes.links} href="/team">YouTube</a>
                </div>
            </Grid>
            <Box height={30}/>
            <Divider variant="middle"/>
            <Box height={30}/>
            <Grid container className={classes.innerContainer2}>
                <a className={classes.links} href="/imprint">Impressum</a>
                <p className={classes.links}>|</p>
                <a className={classes.links} href="/privacy">Datenschutz</a>
            </Grid>
            <Box height={30}/>
        </div>
    );
}
