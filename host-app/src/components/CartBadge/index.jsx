import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useMicrofrontend from '../../hooks/useMicrofrontend';
import config from '../../utils/config';

const CartBadge = ({ cart }) => {
  let history = useHistory();
  const [cartNum, setCartNum] = useState(cart.length);
  const { isLoaded, mfProducts } = useMicrofrontend('mfProducts', config.mfProductsUrl);

  const handleClick = () => history.push('/cart');
  const handleProductAdded = () => setCartNum(v => v + 1);

  useEffect(() => {
    setCartNum(cart.length);
  }, [cart]);

  useEffect(() => {
    if (!mfProducts) return;
    const { customEvents, subscribe, unSubscribe } = mfProducts;
    subscribe(customEvents.PRODUCTS_MF_PRODUCT_ADDED, handleProductAdded);
  
    return () => unSubscribe(customEvents.PRODUCTS_MF_PRODUCT_ADDED, handleProductAdded);
  }, [isLoaded, mfProducts]);

  return (
    <IconButton onClick={handleClick} aria-label={`show ${cartNum} new notifications`}>
      <Badge badgeContent={cartNum} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
};

export default CartBadge;