import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formControl: {
    margin: theme.spacing(1),
    width: theme.spacing(20),
  },
  inputLabel: {
    margin: theme.spacing(0, 1, 0, 1),
  },
  select: {
    margin: theme.spacing(1),
  },
}));

const Lists = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>My Lists</InputLabel>
          <Select className={classes.select}>
            <MenuItem>Custom List 1</MenuItem>
            <MenuItem>Custom List 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Lists;
