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
  const [index, setIndex] = useState(0);
  const [lists, newList] = useState(initialState.user.lists);
  const incomplete = lists[index].incomplete;
  const complete = lists[index].complete;
  const [incompleteItems, incompleteItem] = useState(incomplete);
  const [completedItems, completeItem] = useState(complete);
  const [itemCount, updateItemCount] = useState(0);
  const [listCount, updateListCount] = useState(1);
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
    newList([
      ...lists,
      {
        id: listCount,
        value: value,
        selected: true,
        complete: [],
        incomplete: [],
      },
    ]);
    lists.map((item) => {
      return item.id !== listCount
        ? (item.selected = false)
        : (item.selected = true);
    });
    setValue('');
    setListOpen(false);
    updateListCount(listCount + 1);
    setIndex(listCount);
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
    setIndex(id);
    lists.map((item) => {
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
          listItems={lists}
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
          list={lists[index]}
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
