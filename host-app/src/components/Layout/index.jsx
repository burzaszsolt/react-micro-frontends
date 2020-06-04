import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container>
        <CssBaseline />
        {children}
      </Grid>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
