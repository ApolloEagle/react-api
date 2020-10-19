import React from 'react';

// Components
import ListItem from './ListItem';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
}));

const List = ({ itemList }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {itemList.map((item) => (
        <Grid key={item.id} item xs={12} className={classes.root}>
          <Paper>
            <ListItem key={item.id} value={item.value} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
