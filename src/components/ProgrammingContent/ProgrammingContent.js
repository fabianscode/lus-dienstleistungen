import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Box, Divider, Grid} from "@material-ui/core";
import AndroidIcon from "../../img/android-icon.png";
import ServerIcon from "../../img/kisspng-kubernetes-docker-google-cloud-platform-logo-lxc-container-5ad44c5edfedf4.7230997615238626229172.png";
import AppsIcon from "../../img/code-icon.ico";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: 20,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
        backgroundColor: "#fdfdfd",
        padding: 60
    },
    androidCard: {
        borderRadius: 8,
        color: "#c9c57d",
        background: "repeating-linear-gradient(\n" +
            "\t\t45deg,\n" +
            "\t\ttransparent,\n" +
            "\t\ttransparent 1em,\n" +
            "\t\t#154f1f 0,\n" +
            "\t\t#154f1f 2em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 3em,\n" +
            "\t\t#2f793c 0,\n" +
            "\t\t#2f793c 4em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 5em,\n" +
            "\t\t#56a264 0,\n" +
            "\t\t#56a264 6em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 7em,\n" +
            "\t\t#7fc28b 0,\n" +
            "\t\t#7fc28b 8em\n" +
            "\t),\n" +
            "\trepeating-linear-gradient(\n" +
            "\t\t-45deg,\n" +
            "\t\ttransparent,\n" +
            "\t\ttransparent 1em,\n" +
            "\t\t#625e0e 0,\n" +
            "\t\t#625e0e 2em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 3em,\n" +
            "\t\t#807b23 0,\n" +
            "\t\t#807b23 4em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 5em,\n" +
            "\t\t#afaa54 0,\n" +
            "\t\t#afaa54 6em\n" +
            "\t), #c9c57d",
        borderWidth: 0,
        padding: 60,
        '&:hover': {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.2)"
        },
    },
    serverCard: {
        borderRadius: 8,
        color: "#5d4f73",
        background: "repeating-linear-gradient(\n" +
            "\t\t45deg,\n" +
            "\t\ttransparent,\n" +
            "\t\ttransparent 1em,\n" +
            "\t\t#1b3d93 0,\n" +
            "\t\t#1b3d93 2em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 3em,\n" +
            "\t\t#2b4ea6 0,\n" +
            "\t\t#2b4ea6 4em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 5em,\n" +
            "\t\t#4769be 0,\n" +
            "\t\t#4769be 6em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 7em,\n" +
            "\t\t#7792d5 0,\n" +
            "\t\t#7792d5 8em\n" +
            "\t),\n" +
            "\trepeating-linear-gradient(\n" +
            "\t\t-45deg,\n" +
            "\t\ttransparent,\n" +
            "\t\ttransparent 1em,\n" +
            "\t\t#351269 0,\n" +
            "\t\t#351269 2em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 3em,\n" +
            "\t\t#4f2c85 0,\n" +
            "\t\t#4f2c85 4em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 5em,\n" +
            "\t\t#8366b0 0,\n" +
            "\t\t#8366b0 6em\n" +
            "\t), #a895c7",
        borderWidth: 0,
        padding: 60,
        '&:hover': {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.2)"
        },
    },
    appsCard: {
        borderRadius: 8,
        color: "#bb79b2",
        background: "repeating-linear-gradient(\n" +
            "\t\t45deg,\n" +
            "\t\ttransparent,\n" +
            "\t\ttransparent 1em,\n" +
            "\t\t#5d070e 0,\n" +
            "\t\t#5d070e 2em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 3em,\n" +
            "\t\t#7c1a22 0,\n" +
            "\t\t#7c1a22 4em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 5em,\n" +
            "\t\t#a24850 0,\n" +
            "\t\t#a24850 6em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 7em,\n" +
            "\t\t#c27980 0,\n" +
            "\t\t#c27980 8em\n" +
            "\t),\n" +
            "\trepeating-linear-gradient(\n" +
            "\t\t-45deg,\n" +
            "\t\ttransparent,\n" +
            "\t\ttransparent 1em,\n" +
            "\t\t#56084b 0,\n" +
            "\t\t#56084b 2em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 3em,\n" +
            "\t\t#7c2570 0,\n" +
            "\t\t#7c2570 4em,\n" +
            "\t\ttransparent 0,\n" +
            "\t\ttransparent 5em,\n" +
            "\t\t#94498a 0,\n" +
            "\t\t#94498a 6em\n" +
            "\t), #bb79b2",
        borderWidth: 0,
        padding: 60,
        '&:hover': {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.2)"
        },
    },
    androidInnerCard: {
        backgroundColor: "#2f793c",
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 12,
        minWidth: 400,
        maxWidth: 400
    },
    serverInnerCard: {
        backgroundColor: "#4f2c85",
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 12,
        minWidth: 400,
        maxWidth: 400
    },
    appsInnerCard: {
        backgroundColor: "#7c1a22",
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 12,
        minWidth: 400,
        maxWidth: 400
    },
    title: {
        fontSize: 46,
        fontWeight: 500,
        color: "#424242",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 26,
        fontWeight: 500,
        color: "#757575",
        textAlign: "center"
    },
    secondaryTitle: {
        fontSize: 24,
        fontWeight: 500,
        color: "#424242",
        textAlign: "center"
    },
    flexContainer: {
        display: "flex"
    },
    individualCardTitle: {
        fontSize: 30,
        fontWeight: 500,
        color: "#fff",
    },
    individualCardText: {
        fontSize: 18,
        fontWeight: 500,
        color: "#ffffff",
    },
    teamButton: {
        backgroundColor: "#1a73e8",
        color: "#ffffff",
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: "#868686",
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
            background: "#155fc0",
        },
    },
});

export default function ProgrammingContent() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div>
                    <h2 className={classes.title} color="textSecondary">
                        Programmieren
                    </h2>
                    <p className={classes.subtitle}>
                        Wir setzen deine Ideen in effizienten Code um
                    </p>
                </div>

                <Box height={30}/>
                <Divider/>
                <Box height={60}/>

                <Card className={classes.androidCard}>
                    <CardContent>
                        <div className={classes.flexContainer}>
                            <Grid container justifyContent="space-evenly" alignItems="center">
                                <img src={AndroidIcon} width={160} height={160} alt={"Design Illustration"}/>
                            </Grid>

                            <Box width={60}/>
                            <div>
                                <Card className={classes.androidInnerCard}>
                                    <CardContent>
                                        <h2 className={classes.individualCardTitle}>
                                            Android App-Entwicklung
                                        </h2>
                                        <p className={classes.individualCardText}>
                                            Mit jahrelanger Erfahrung entwickeln wir deine nativen Android-Apps in allen Bereichen
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Box height={60}/>

                <Card className={classes.serverCard}>
                    <CardContent>
                        <div className={classes.flexContainer}>

                            <div>
                                <Card className={classes.serverInnerCard}>
                                    <CardContent>
                                        <h2 className={classes.individualCardTitle}>
                                            Server-Entwicklung
                                        </h2>
                                        <p className={classes.individualCardText}>
                                            Wir bieten die Entwicklung von kleinen bis mittelgroßen Server-Implementationen mit ExpressJS und Kubernetes an
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <Box width={60}/>
                            <Grid container justifyContent="space-evenly" alignItems="center">
                                <img src={ServerIcon} width={160} height={160} alt={"Design Illustration"}/>
                            </Grid>
                        </div>
                    </CardContent>
                </Card>

                <Box height={60}/>

                <Card className={classes.appsCard}>
                    <CardContent>
                        <div className={classes.flexContainer}>
                            <Grid container justifyContent="space-evenly" alignItems="center">
                                <img src={AppsIcon} width={160} height={160} alt={"Design Illustration"}/>
                            </Grid>

                            <Box width={60}/>
                            <div>
                                <Card className={classes.appsInnerCard}>
                                    <CardContent>
                                        <h2 className={classes.individualCardTitle}>
                                            Simple Anwendungen für den Alltagsgebrauch
                                        </h2>
                                        <p className={classes.individualCardText}>
                                            Ob Desktop-Apps für Windows oder einfache Shell-Anwendungen. Wir entwickeln es für dich!
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Box height={60}/>
                <Divider/>
                <Box height={60}/>

                <div>
                    <p className={classes.subtitle}>
                        Du hast Talent beim Programmieren?
                    </p>
                    <Box height={20}/>
                    <Grid container justifyContent="space-evenly" alignItems="center">
                        <a className={classes.teamButton} href="/join">
                            Mach bei uns mit
                        </a>
                    </Grid>
                </div>
            </CardContent>
        </Card>
    );
}
