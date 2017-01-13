import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>, 
  document.getElementById('root')
); 
