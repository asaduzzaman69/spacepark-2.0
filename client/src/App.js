import { useEffect, useState } from "react";
import "./App.css";
//Router import
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
//styled import
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared-styles/global-styles";
// theme
import { lightTheme } from "./theme/theme";
//Core component
import Client from "./pages/client/client";
import Auth from "./components/Auth/auth";

// redux
import {  useDispatch } from 'react-redux'
import { fetchCurrentUser } from "./redux/reducer/userSlice";


const App = () => {
  const [theme, setTheme] = useState("light");
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if(user && user.id) {
      dispatch(fetchCurrentUser(user.id))
    } else {
      history.push('/login')
    }
  }, []);
  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />

        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route  path="/client" component={Client} />
          <Redirect  from="/" to="/client" />
        </Switch>
      </ThemeProvider>
  );
};

export default App;
