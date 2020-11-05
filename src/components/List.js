import React, { useState } from 'react';

// Components
import ListItem from './ListItem';
import TabPanel from './TabPanel';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5, 1, 0, 1),
      width: theme.spacing(50),
      height: theme.spacing(5),
      backgroundColor: '#0079C1',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(100),
      height: theme.spacing(5),
    },
  },
}));

const List = ({
  incompleteList,
  completeList,
  deleteItem,
  completeItem,
  undoItem,
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.tabs}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Incomplete" />
          <Tab label="Complete" />
        </Tabs>
      </Grid>
      <Grid item>
        <TabPanel value={value} index={0}>
          {incompleteList.map((item) => (
            <Grid key={item.id} item xs={12} className={classes.root}>
              <Paper>
                <ListItem
                  key={item.id}
                  value={item.value}
                  id={item.id}
                  deleteItem={deleteItem}
                  completeItem={completeItem}
                  completed={false}
                />
              </Paper>
            </Grid>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {completeList.map((item) => (
            <Grid key={item.id} item xs={12} className={classes.root}>
              <Paper>
                <ListItem
                  key={item.id}
                  value={item.value}
                  id={item.id}
                  deleteItem={deleteItem}
                  completeItem={completeItem}
                  undoItem={undoItem}
                  completed={true}
                />
              </Paper>
            </Grid>
          ))}
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default List;
