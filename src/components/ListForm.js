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
          id: 0,
          value: 'My First List',
          selected: true,
          incomplete: [],
          complete: [],
        },
      ],
    },
  };

  // Hooks
  const lists = initialState.user.lists;
  const [listIndex, setListIndex] = useState(0);
  const [newList, createNewList] = useState(lists);
  const incomplete = newList[listIndex].incomplete;
  const complete = newList[listIndex].complete;
  const [itemCount, updateItemCount] = useState(0);
  const [listCount, updateListCount] = useState(1);
  const [incompleteItems, incompleteItem] = useState(incomplete);
  const [completedItems, completeItem] = useState(complete);
  const [itemOpen, setItemOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [value, setValue] = useState('');

  // Handlers
  const handleAddItem = () => {
    incompleteItem([...incompleteItems, { id: itemCount, value: value }]);
    updateItemCount(itemCount + 1);
    setItemOpen(false);
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
  const handleAddList = () => {
    createNewList([
      ...newList,
      {
        id: listCount,
        value: value,
        selected: true,
        complete: [],
        incomplete: [],
      },
    ]);
    newList.map((item) => {
      return item.id !== listCount
        ? (item.selected = false)
        : (item.selected = true);
    });
    setValue('');
    setListOpen(false);
    updateListCount(listCount + 1);
  };
  const handleItemClose = () => {
    setItemOpen(false);
  };
  const handleItemOpen = () => {
    setItemOpen(true);
  };
  const handleListOpen = () => {
    setListOpen(true);
  };
  const handleListClose = () => {
    setListOpen(false);
  };
  const handleInput = (inputValue) => {
    setValue(inputValue);
  };
  const handleListSelect = (id) => {
    setListIndex(id);
    newList.map((item) => {
      return item.id !== id ? (item.selected = false) : (item.selected = true);
    });
  };

  // Style
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.lists}>
        <Lists
          open={listOpen}
          closeModal={handleListClose}
          openModal={handleListOpen}
          itemValue={value}
          addInput={handleInput}
          listItems={newList}
          addList={handleAddList}
          selectList={handleListSelect}
        />
      </Grid>
      <Grid item xs={12} className={classes.addItem}>
        <AddItem
          addItem={handleAddItem}
          open={itemOpen}
          closeModal={handleItemClose}
          openModal={handleItemOpen}
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
