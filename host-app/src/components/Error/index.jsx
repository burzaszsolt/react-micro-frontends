import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Error = ({ message }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='h5'>{message}</Typography>
    </Container>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}

export default Error;
