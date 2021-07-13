import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import TimerPage from './pages/TimerPage';

const theme = createTheme({
  palette: {
    primary: {
      main: "#05445E"
    },

    secondary: {
      main: "#189AB4"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TimerPage/>
    </ThemeProvider>
  );
}

export default App;
