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

  const addProductToCart = async id => {
    try {
      const res = await api.post('/cart', {
        body: { id, quantity: 1 }
      });
      setCart(c => ([...c, res]));
      setAlert({ open: true, severity: 'success', message: 'Successfully added to cart!' });
      dispatchEvent(eventsToDispatch.PRODUCTS_MF_PRODUCT_ADDED);
    } catch (e) {
      setAlert({ open: true, severity: 'error', message: 'Failed to add product to cart!' });
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

  const handleAddToCart = async id => {
    const productInCart = cart.find(p => p.id === id);
    if (productInCart) {
      updateProductInCart({ ...productInCart, quantity: productInCart.quantity + 1 });
    } else {
      addProductToCart(id);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {children(
        isCartLoading,
        handleAddToCart
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
