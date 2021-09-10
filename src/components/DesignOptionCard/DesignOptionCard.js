import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DesignIcon from "../../img/design-icon.png"
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 360,
        borderRadius: 20,
        backgroundColor: "#f1f3f4",
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
        paddingBottom: 20,
        textDecoration: "none",
        marginBottom: 40,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        boxSizing: "border-box",
        '&:hover': {
            background: "#d2e3fc",
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    title: {
        fontSize: 30,
        fontWeight: 500,
        margin: 18,
        color: "#424242",
        textAlign: "center",
    },
    explanation: {
        fontSize: 24,
        fontWeight: 300,
        color: "#757575",
        textAlign: "center",
        minHeight: 40,
        wordWrap: "break-word"
    },
    link: {
        color: "#1967d2",
        fontSize: 22,
        fontWeight: 500,
        textDecoration: "none"
    }
});

export default function DesignOptionCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined" component={Link} to="/design">
            <CardContent>
                <Grid container justifyContent="space-evenly" alignItems="center">
                    <img src={DesignIcon} width={160} height={160} alt={"Design Illustration"}/>
                </Grid>
                <h5 className={classes.title} color="textSecondary">
                    Design
                </h5>
                <p className={classes.explanation}>Setze dein Konzept in etwas Konkretes um</p>
                <Grid container justifyContent="space-evenly" alignItems="center">
                    <a className={classes.link} href="/design">Angebote ansehen</a>
                </Grid>
            </CardContent>
        </Card>
    );
}
