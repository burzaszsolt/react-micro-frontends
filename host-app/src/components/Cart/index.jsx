import React, {useEffect } from 'react';
import { useTheme } from '@material-ui/core';

import useMicrofrontend from '../../hooks/useMicrofrontend';
import config from '../../utils/config';
import Error from '../Error';

const Cart = () => {
  const id = 'mfCart';
  const theme = useTheme();
  const { isLoaded, mfCart } = useMicrofrontend(id, config.mfCartUrl);

  useEffect(() => {
    if (!mfCart) return;
    const { render, unMount } = mfCart;
    render(id, { theme });

    return () => unMount(id);
  }, [isLoaded]); // eslint-disable-line

  if (!isLoaded) return null;
  if (!mfCart) return <Error message='Cart microfrontend is not available' />;

  return <div id={id} />;
};

export default Cart;
