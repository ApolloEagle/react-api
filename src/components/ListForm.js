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
  const [items, updateItems] = useState(incomplete);
  const [completedItems, completeItem] = useState(complete);

  // Handlers
  const handleAddItem = () => {
    updateItems([...items, { id: count, value: 'New Item' }]);
    updateCount(count + 1);
  };
  const handleDeleteItem = (id) => {
    updateItems(items.filter((item) => item.id !== id));
  };
  const handleCompleteItem = (id, value) => {
    updateItems(items.filter((item) => item.id !== id));
    completeItem([...completedItems, { id: id, value: value }]);
  };

  // Style
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.lists}>
        <Lists />
      </Grid>
      <Grid item xs={12} className={classes.addItem}>
        <AddItem addItem={handleAddItem} />
      </Grid>
      <Grid item xs={12} className={classes.list}>
        <List
          itemList={items}
          deleteItem={handleDeleteItem}
          completeItem={handleCompleteItem}
        />
      </Grid>
    </Grid>
  );
};

export default ListForm;
