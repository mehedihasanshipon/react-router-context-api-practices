
// import './App.css';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import SingleUser from './components/SingleUser/SingleUser';
import { createContext, useState } from 'react';

export const createCategory = createContext();

function App() {
  const [category,setCategory] = useState('Laptop');
  return (
    <createCategory.Provider value = {[category,setCategory]}>
      <Router>
        <Header />
        <Switch>
          <Route path ="/home">
            <Home />
          </Route>
          <Route path ="/category">
            <Category />
          </Route>
          <Route path ="/post">
            <Post />
          </Route>
          <Route path="/user/:id">
            <SingleUser />
          </Route>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path ="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </createCategory.Provider>
  );
}

export default App;
