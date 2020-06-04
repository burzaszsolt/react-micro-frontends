import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { eventsToListen } from 'src/utils/events';
import useWindowEventListener from 'src/hooks/useWindowEventListener';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mfProducts',
  seed: 'mfProducts'
});

const CombinedContextProvider = ({ children, theme }) => {
  const [activeTheme, setActiveTheme] = useState(theme);

  const handleThemeChanged = e => setActiveTheme(e.detail);
  useWindowEventListener(eventsToListen.HOST_THEME_CHANGED, handleThemeChanged);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={activeTheme}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

CombinedContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default CombinedContextProvider;
