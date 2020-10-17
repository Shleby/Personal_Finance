import React from "react";
import {
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      paddingLeft: "10px",
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  })
);

/**
 * One's net worth is the dollar amount of their assets, subtracting all of their debts
 * This component connects to all of a users accounts to pull in the amount that they
 * have in their assets at any given time. It also can be inputed manually.
 */
export default function NetWorth() {
  const classes = useStyles();
  const value = 3;
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
      spacing={4}
    >
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="subtitle1" gutterBottom>
            Total amount in assets: ${value}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Total amount in debt: ${}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle1" gutterBottom>
            Net Worth: ${}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={3}>
          Todo:
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper} elevation={3}>
          Todo:
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={3}>
          Todo:
        </Paper>
      </Grid>
    </Grid>
  );
}
