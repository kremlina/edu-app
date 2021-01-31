import './App.css';
import {BrowserRouter, NavLink, Route } from "react-router-dom";
import {Component} from "react";
import * as PropTypes from "prop-types";

const Profile = ()=>{
    return (
        <h1>Это страница с профилем</h1>
    )
}
const Message = ()=>{
    return (
        <h1>Это страница с сообщениями</h1>
    )
}
const Settings = ()=>{
    return (
        <h1>Это страница с настройками</h1>
    )
}
const Friends = ()=>{
    return (
        <h1>Это страница с друзьями</h1>
    )
}
const Menu = ()=>{
    return <div className="nav flex-column nav-pills" aria-orientation="vertical">
        <NavLink className="nav-link" to="profile">Профиль</NavLink>
        <NavLink className="nav-link" to="message">Сообщения</NavLink>
        <NavLink className="nav-link" to="settings">Настройки</NavLink>
        <NavLink className="nav-link" to="friends">Мои друзья</NavLink>
    </div>
}

NavLink.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
            <div className="row">
              <div className="col-sm-3">
                <Menu/>
              </div>
              <div className="col-sm-9">
                  <Route path="/profile" component={Profile}/>
                  <Route path="/message" component={Message}/>
                  <Route path="/settings" component={Settings}/>
                  <Route path="/friends" component={Friends}/>
              </div>
            </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
