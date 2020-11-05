import React, { useState } from 'react';

// Components
import Lists from './Lists';
import AddItem from './AddItem';
import List from './List';

// Material-UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  lists: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(50),
      height: theme.spacing(10),
      backgroundColor: '#EAEAEA',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItem: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(50),
      height: theme.spacing(10),
      backgroundColor: '#EAEAEA',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(50),
      height: theme.spacing(17),
      backgroundColor: '#EAEAEA',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ListForm = () => {
  const initialState = {
    user: {
      id: '1234',
      lists: [
        {
          id: '1',
          value: 'My First List',
          incomplete: [],
          complete: [],
        },
      ],
    },
  };

  // Hooks
  const incomplete = initialState.user.lists[0].incomplete;
  const complete = initialState.user.lists[0].complete;
  const [count, updateCount] = useState(0);
  const [incompleteItems, incompleteItem] = useState(incomplete);
  const [completedItems, completeItem] = useState(complete);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  // Handlers
  const handleAddItem = () => {
    incompleteItem([...incompleteItems, { id: count, value: value }]);
    updateCount(count + 1);
    setOpen(false);
    setValue('');
  };
  const handleDeleteItem = (id) => {
    incompleteItem(incompleteItems.filter((item) => item.id !== id));
    completeItem(completedItems.filter((item) => item.id !== id));
  };
  const handleCompleteItem = (id, value) => {
    incompleteItem(incompleteItems.filter((item) => item.id !== id));
    completeItem([...completedItems, { id: id, value: value }]);
  };
  const handleUndoItem = (id, value) => {
    completeItem(completedItems.filter((item) => item.id !== id));
    incompleteItem([...incompleteItems, { id: id, value: value }]);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleInput = (inputValue) => {
    setValue(inputValue);
  };

  // Style
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.lists}>
        <Lists
          addItem={handleAddItem}
          open={open}
          closeModal={handleClose}
          openModal={handleOpen}
          itemValue={value}
          addInput={handleInput}
        />
      </Grid>
      <Grid item xs={12} className={classes.addItem}>
        <AddItem
          addItem={handleAddItem}
          open={open}
          closeModal={handleClose}
          openModal={handleOpen}
          itemValue={value}
          addInput={handleInput}
        />
      </Grid>
      <Grid item xs={12} className={classes.list}>
        <List
          incompleteList={incompleteItems}
          completeList={completedItems}
          deleteItem={handleDeleteItem}
          completeItem={handleCompleteItem}
          undoItem={handleUndoItem}
        />
      </Grid>
    </Grid>
  );
};

export default ListForm;
