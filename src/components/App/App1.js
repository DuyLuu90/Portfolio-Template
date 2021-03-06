import React from 'react';
import {Route, Switch} from 'react-router-dom';
//import { Route } from '../../MyRouter/MyRouter';

//import { withTodos } from './hoc/withTodos';

/**COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import Home from '../HomePage/Home';
import Info from '../HomePage/Info';
import Summary from '../HomePage/Summary';
import Portfolio from '../PortfolioPage/Portfolio';
import Contact from '../ContactPage/Contact'

import './App.css';

class App extends React.Component {
  state = {
    activePage: 'List',
  };

  handleChangeActivePage = (newActivePage) => {
    this.setState({
      activePage: newActivePage,
    });
  };

  

  render() {
    return (
      <div className="page-container">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Info}/>
            <Route path="/summary" component={Summary}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
