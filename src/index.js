import React from 'react';
import ReactDOM from 'react-dom';
// import Lifecycle from './reactjsdasar/Lifecycle';
// import Map from './reactjsdasar/Map';
// import StateProps from './reactjsdasar/StateProps';
// import App from './App';
// import Variabel from './reactjsdasar/Variabel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StateProps /> */}
    {/* <Map /> */}
    {/* <Lifecycle /> */}
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);