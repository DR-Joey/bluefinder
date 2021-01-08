import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    borderRadius: 3,
    vertical-align:"middle";
    color: theme.palette.text.secondary,
    height: 30,
  },
}));

const TableUI = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>Code</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Controller</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Description</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default TableUI;
