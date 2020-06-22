import React, {Component} from 'react';
import logo from './images/logo.jpg';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      userName: 'Dilip',
      notifications: 10,
      menu: [
          {name:"Applications"},
          {name:"Enhanced Reports"},
          {name:"Other"},
          {name:"MAI As-Hoc Data"}
      ]
    }
  }
  render() {
    return (
          <div>
            <div className="row">
              <div className="col-sm-6">
                <h3>Manufacturing Analytics and Insights</h3>
              </div>
              <div className="col-sm-6 ">
                <div className="float-right">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item" style={{border: 'none'}}>
                      <h6>Welcome</h6>
                      <ul className="nav user">
                        <li className="dropdown">
                          <a className="dropdown-toggle" data-toggle="dropdown" href="#">{this.state.userName}</a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item">Profile</a>
                            <a className="dropdown-item">Settings</a>
                            <a className="dropdown-item">Notification Settings</a></div>
                        </li>
                      </ul>
                    </li>
                    <li className="list-group-item" style={{border: 'none'}}><i className="fa fa-bell-o fa-2x"
                                                                            aria-hidden="true"></i><sup>{this.state.notifications}</sup>
                    </li>
                    <li className="list-group-item" style={{border: 'none'}}></li>
                    <img className="logo" src={logo}/>
                  </ul>
                </div>
              </div>
            </div>
            <span className="greenline"></span>
            <span className="yellowline"></span>
            <div className="row">
              <div className="col sidebar">
                <div className="sdidebar">
                  <ul className="list-sidebar">
                    <li><a href="#"><i className="fa fa-bars fa-2x list-sidebar-item"></i></a></li>
                    <li><a href="#"><i className="fa  fa-home fa-2x list-sidebar-item"></i></a></li>
                    <li><a href="#"><i className="fa fa-cog fa-2x list-sidebar-item"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-11">
                <div className="row">
                  <ul className="nav">
                    {this.state.menu.map((item, index) => {
                      return (<li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" key={index} data-toggle="dropdown" href="#">{item.name}</a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item " href="#">Link 1</a>
                          <a className="dropdown-item" href="#">Link 2</a>
                          <a className="dropdown-item" href="#">Link 3</a></div>
                      </li>)
                    })}
                  </ul>
                </div>
                <div className="row main-search">
                  <div className="main">
                    <div className="form-group has-search">
                      <span className="fa fa-search form-control-feedback"></span>
                      <input type="text" className="form-control"
                             placeholder='Search Data or Reports. Try "Forecast","AE"'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
