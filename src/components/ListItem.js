import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
  radio: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginTop: theme.spacing(1),
  },
  itemName: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: theme.spacing(1),
  },
  delete: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginTop: theme.spacing(1),
  },
}));

const ListItem = ({ value }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.radio}>
        <RadioButtonUncheckedIcon />
      </Grid>
      <Grid item xs={4} className={classes.itemName}>
        {value}
      </Grid>
      <Grid item xs={4} className={classes.delete}>
        <DeleteIcon />
      </Grid>
    </Grid>
  );
};

export default ListItem;
