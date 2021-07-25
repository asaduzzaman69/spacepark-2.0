import { useEffect, useState } from "react";
//Router import
import { Redirect, Route, Switch } from "react-router-dom";
// Material UI
//styled import
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared-styles/global-styles";
// theme
import { lightTheme } from "./theme/theme";
//Core component
import Homepage from "./pages/homepage/Homepage";
import "./App.css";
import Auth from "./components/Auth/auth";
import { store } from "./redux/store";
import {  useDispatch } from 'react-redux'
import { fetchCurrentUser } from "./redux/reducer/userSlice";


const App = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if(user.id) {
      console.log('I am getting dispatched')
      dispatch(fetchCurrentUser(user.id))
    }
    
  }, []);
  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route exact path="/client" component={Homepage} />
          <Redirect from="/" to="/client" />
        </Switch>
      </ThemeProvider>
  );
};

export default App;
