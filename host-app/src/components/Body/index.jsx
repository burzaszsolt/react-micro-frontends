import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from "react-router-dom";

import Products from '../Products';
import Cart from '../Cart';
import useStyles from './styles';

const Body = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Grid className={classes.content} >
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Grid>
    </main>
  );
};

export default Body;
