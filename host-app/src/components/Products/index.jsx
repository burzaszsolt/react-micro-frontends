import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/core';

import useMicrofrontend from '../../hooks/useMicrofrontend';
import config from '../../utils/config';
import Error from '../Error';

const Products = () => {
  const id = 'mfProducts';
  const { isLoaded, mfProducts }= useMicrofrontend(id, config.mfProductsUrl);
  const theme = useTheme();

  useEffect(() => {
    if (!mfProducts) return;
    const { render, unMount } = mfProducts;
    render(id, { theme });

    return () => unMount(id);
  }, [isLoaded]); // eslint-disable-line

  if (!isLoaded) return null;
  if (!mfProducts) return <Error message='Products microfrontend is not available' />;

  return <div id={id} />;
};

export default Products;
