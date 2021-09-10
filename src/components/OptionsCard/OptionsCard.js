import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DesignOptionCard from "../DesignOptionCard/DesignOptionCard";
import {Box, Grid} from "@material-ui/core";
import ProgrammingOptionCard from "../ProgrammingOptionCard/ProgrammingOptionCard";
import PrintingOptionCard from "../PrintingOptionCard/PrintingOptionCard";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: 20,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
        backgroundColor: "#fdfdfd"
    },
    title: {
        fontSize: 42,
        fontWeight: 500,
        color: "#424242",
        textAlign: "center"
    },
    optionsContainer: {
    }
});

export default function OptionsCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h2 className={classes.title} color="textSecondary">
                    Unsere Dienstleistungen
                </h2>
                <Box height={30}/>
                <Grid container styles={classes.optionsContainer} justifyContent="space-evenly" alignItems="center">
                    <ProgrammingOptionCard/>
                    <PrintingOptionCard/>
                    <DesignOptionCard/>
                </Grid>
            </CardContent>
        </Card>
    );
}
