import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import modes from './modes';

const theme = createTheme(modes.dark);

export default theme;