import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(-0.5),
  },
  radio: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  itemName: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

const ListItem = ({
  value,
  id,
  deleteItem,
  completeItem,
  undoItem,
  completed,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.radio}>
        {!completed && (
          <IconButton onClick={() => completeItem(id, value)}>
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}
        {completed && (
          <IconButton onClick={() => undoItem(id, value)}>
            <ReplayIcon />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={4} className={classes.itemName}>
        {value}
      </Grid>
      <Grid item xs={4} className={classes.delete}>
        <IconButton onClick={() => deleteItem(id)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ListItem;
