import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Navbar from '../components/Navbar';
import SEO from './SEO';

const globalStyles = {
  '@import': "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  '*': {
    boxSizing: 'border-box',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#19D9B6', // Cyan
    },
    secondary: {
      main: '#ff4081', // Pink
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const Layout: React.FC<{ children: React.ReactNode, name: string }> = ({ children, name }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Rizky Portfolio" />
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Navbar name={name} />
      <div style={{ height: 60 }} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;