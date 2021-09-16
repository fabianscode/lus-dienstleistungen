import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PrinterIcon from "../../img/printer.png";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 200,
        marginBottom: 200,
    },
    title: {
        fontSize: 52,
        fontWeight: 500,
        marginBottom: 32,
        color: "#fff",
        textAlign: "left",
    },
    grid: {
        display: "flex"
    },
    imageContainer: {
        marginTop: 200,
        marginLeft: 50,
        marginBottom: 50
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 400,
        marginBottom: 48,
        color: "#fff",
        textAlign: "left",
    },
    teamButton: {
        backgroundColor: "#fff",
        color: "#1a73e8",
        borderRadius: 12,
        fontSize: 20,
        textAlign: "center",
        textDecoration: "none",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 52,
        paddingRight: 52,
        maxWidth: 255,
        marginRight: 30,
        transitionProperty: "background-color",
        transitionDuration: 2,
        transitionTimingFunction: "linear",
        '&:hover': {
            background: "#d2e3fc",
        },
    },
    joinButton: {
        backgroundColor: "transparent",
        color: "#fff",
        borderRadius: 8,
        fontSize: 16,
        textAlign: "center",
        textDecoration: "none",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        maxWidth: 255,
        marginRight: 30,
        transitionProperty: "background-color",
        transitionDuration: 2,
        transitionTimingFunction: "linear",
        '&:hover': {
            background: "#b2c8d233",
        },
    },
});

export default function ExploreTeamCard() {
    const classes = useStyles();

    return (
        <section>
            <div className={classes.grid}>
                <div className={classes.root}>
                    <h1 className={classes.title}>
                        Wir entwickeln deine Teile und Programme
                    </h1>
                    <h3 className={classes.subtitle}>
                        Angetrieben von Faszination am 3D-Druck und Spaß am Programmieren sammeln wir täglich Erfahrung und verbessern dadurch unsere Produkte
                    </h3>
                    <div>
                        <a className={classes.teamButton} href="/team">
                            Das Team
                        </a>
                        <a className={classes.joinButton} href="/join">
                            Tritt dem Team bei
                        </a>
                    </div>
                </div>
                <Grid container className={classes.imageContainer} justifyContent="space-evenly" alignItems="center">
                    <img src={PrinterIcon} width={500} height={500} alt={"Design Illustration"}/>
                </Grid>
            </div>
        </section>
    );
}
