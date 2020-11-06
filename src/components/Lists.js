import React from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
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

const Lists = ({
  open,
  closeModal,
  openModal,
  itemValue,
  addInput,
  listItems,
  addList,
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.inputLabel}>My Lists</InputLabel>
          <Select className={classes.select}>
            <MenuItem>
              <Button
                onClick={() => openModal()}
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
              >
                Create List
              </Button>
            </MenuItem>
            {listItems.map((item) => (
              <MenuItem>
                <Grid container>
                  <Grid item xs={10}>
                    {item.value}
                  </Grid>
                  <Grid item xs={2}>
                    <CheckIcon />
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Dialog
          open={open}
          onClose={() => closeModal()}
          className={classes.modal}
          disableBackdropClick
        >
          <DialogTitle id="list-dialog">Enter List Name</DialogTitle>
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
            <Button onClick={() => addList()} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Lists;
