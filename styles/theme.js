import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

export default theme;
