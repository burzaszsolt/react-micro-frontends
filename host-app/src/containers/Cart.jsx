import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import api from '../utils/api';

const CartContainer = ({ children }) => {
  let history = useHistory();
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    try {
      const res = await api.get('/cart');
      setCart(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (history.location.pathname === '/') getCart();
  }, [history.location.pathname]);

  return children(cart);
};

CartContainer.propTypes = {
  children: PropTypes.func
};

export default CartContainer;
