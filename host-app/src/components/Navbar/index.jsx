import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';

import useStyles from './styles';
import Theme from '../Theme';
import CartBadge from '../CartBadge';

const Navbar = ({ isCartLoading, cart }) => {
  let history = useHistory();
  const classes = useStyles();
  const showCartBadge = history.location.pathname === '/';

  const handleClick = () => history.push('/');

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <PetsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Frenchie Store
          </Typography>
          <div className={classes.grow} />
          {showCartBadge && <CartBadge cart={cart} />}
          <Theme />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;