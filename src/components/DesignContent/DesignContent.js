import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Box} from "@material-ui/core";

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
});

export default function DesignContent() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h2 className={classes.title} color="textSecondary">
                    Design
                </h2>
                <Box height={30}/>
            </CardContent>
        </Card>
    );
}
