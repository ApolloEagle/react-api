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
          incomplete: [{ id: 0, value: 'New Item' }],
          complete: [],
        },
      ],
    },
  };

  const incomplete = initialState.user.lists[0].incomplete[0];
  const [items, setItems] = useState([incomplete]);
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.lists}>
        <Lists />
      </Grid>
      <Grid item xs={12} className={classes.addItem}>
        <AddItem
          addItem={() =>
            setItems([...items, { id: items.length, value: 'New Item' }])
          }
        />
      </Grid>
      <Grid item xs={12} className={classes.list}>
        <List itemList={items} />
      </Grid>
    </Grid>
  );
};

export default ListForm;
