import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './styles';

const Product = ({ id, title, imageSrc, price, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <Card elevation={4} className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => handleAddToCart(id)}>
            <ShoppingCartIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        className={classes.media}
        image={imageSrc}
        title={title}
      />
    </Card>
  );
}


Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired
};


export default Product;