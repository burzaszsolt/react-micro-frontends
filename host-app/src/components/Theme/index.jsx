import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { StyleContext } from '../../context/Style';

const Theme = () => {
  const { useDarkTheme, switchTheme } = useContext(StyleContext);

  return (
    <IconButton onClick={switchTheme}>
      {useDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default Theme;
