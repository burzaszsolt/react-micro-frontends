import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';
import dispatchEvent, { eventsToDispatch } from '../../utils/events';

const Cart = ({ cart = [], products = [], isCartLoading, isProductsLoading, updateProductInCart, deleteProductFromCart }) => {
  const classes = useStyles();
  const loading = isCartLoading || isProductsLoading;

  const handleDecrease = id => {
    const product = cart.find(p => p.id === id);
    const quantity = product?.quantity - 1;
    if (quantity < 0) return;
    updateProductInCart({ ...product, quantity })
  };

  const handleIncrease = id => {
    const product = cart.find(p => p.id === id);
    const quantity = product?.quantity + 1;
    updateProductInCart({ ...product, quantity })
  };
  
  const handleDelete = id => {
    deleteProductFromCart(id);
  };

  if (loading) return <div>Loading...</div>;
  if (!products || !cart) return null;

  const productsInCart = cart && products ? cart.map(c => {
    const product = products.find(p => p.id === c.id) ?? {};
    return {
      ...c,
      ...product
    }
  }) : []; 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsInCart.map(p => (
            <TableRow key={p.id}>
              <TableCell align="center">
                {p.title}
              </TableCell>
              <TableCell align="center">{p.price}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleDecrease(p.id)}>
                  <ArrowLeftIcon />
                </IconButton>
                {p.quantity}
                <IconButton onClick={() => handleIncrease(p.id)}>
                  <ArrowRightIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleDelete(p.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Cart.propTypes = {
  products: PropTypes.array
};

export default Cart;