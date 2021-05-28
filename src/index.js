import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App/App';
import App1 from './components/App/App1'
import {BrowserRouter} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import './index.css';

import {
  faCopyright,
  faEdit,
  faTrash,
  faHamburger,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCopyright,
  faEdit,
  faTrash,
  faHamburger,
)


ReactDOM.render(
  <BrowserRouter>
    <App1/>
  </BrowserRouter>,document.getElementById('root'));