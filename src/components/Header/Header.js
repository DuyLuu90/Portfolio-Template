import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
//import {AppLogo} from '../Utils/Utils'

import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo">
							<Link to="/"><img alt="logo"src = {logo}/></Link>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className = "primary-nav">
							<ul>
								<li><Link to = "/">Home</Link></li>
								<li><Link to = "portfolio">Portfolio</Link></li>
								<li><Link to = "/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

/*
<Link to = "index.html"><img src = "images/logo.svg"></a>
<div classNameName="header-list">
        <AppLogo></AppLogo>
        
        <nav classNameName="nav">
          <Link to="/">HOME</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

 */


