import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AddItem = ({ addItem }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Button
          onClick={() => addItem()}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Add Item
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddItem;
