import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import api from '../utils/api';
import dispatchEvent, { eventsToDispatch } from '../utils/events';

const CartContainer = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, severity: 'success', message: '' });

  const handleClose = () => setAlert({ ...alert, open: false });

  const getCart = async () => {
    try {
      setLoading(true);
      const res = await api.get('/cart');
      setCart(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const updateProductInCart = async product => {
    try {
      const res = await api.put(`/cart/${product.id}`, {
        body: product
      });
      setCart(c => c.map(c => c.id === product.id ? res : c));
      setAlert({ open: true, severity: 'success', message: 'Successfully updated product in cart!' });
    } catch (e) {
      setAlert({ open: true, severity: 'error', message: 'Failed to update product in cart!' });
    }
  };

  const deleteProductFromCart = async (id) => {
    try {
      const res = await api.delete(`/cart/${id}`);
      setCart(c => c.filter(p => p.id !== id));
      setAlert({ open: true, severity: 'success', message: 'Successfully deleted product from cart!'});
      dispatchEvent(eventsToDispatch.CART_MF_PRODUCT_DELETED);
    } catch (e) {
      setAlert({ open: true, severity: 'error', message: 'Failed to delete product from cart!' });
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {children(
        cart,
        isCartLoading,
        updateProductInCart,
        deleteProductFromCart
      )}
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

CartContainer.propTypes = {
  children: PropTypes.func
};

export default CartContainer;
