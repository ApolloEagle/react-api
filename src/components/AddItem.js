import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Input from '@material-ui/core/Input';
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
  dialog: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const AddItem = ({
  addItem,
  open,
  closeModal,
  openModal,
  itemValue,
  addInput,
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Button
          onClick={() => openModal()}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Add Item
        </Button>
        <Dialog
          open={open}
          onClose={() => closeModal()}
          className={classes.modal}
          disableBackdropClick
        >
          <DialogTitle id="item-dialog">Enter Item</DialogTitle>
          <DialogContent>
            <Input
              value={itemValue}
              onChange={(e) => addInput(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => closeModal()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => addItem()} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default AddItem;
