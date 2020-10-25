import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(50),
      height: theme.spacing(5),
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function TabPanel({ children, value, index }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} hidden={value !== index}>
      {value === index && (
        <Grid item xs={12}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}

export default TabPanel;
