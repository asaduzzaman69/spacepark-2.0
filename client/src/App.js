import { useState } from "react";
//Router import
import { Route, Switch } from "react-router-dom";
// Material UI
//styled import 
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from './shared-styles/global-styles'
// theme
import { lightTheme } from "./theme/theme";
//Core component
import Login from "./pages/login/Login";
import Homepage from './pages/homepage/Homepage'
import "./App.css";




const App = () => {
  const [theme, setTheme] = useState("light");
  return (


    <ThemeProvider theme={lightTheme}>
    <GlobalStyle />

      <Switch>
      
        <Route exact path='/login' component={Login} />
        <Route exact path='/client' component={Homepage} />
      </Switch>
    </ThemeProvider>

  );
};

export default App;
