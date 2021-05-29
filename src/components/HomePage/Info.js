import React from 'react';
import { Link } from 'react-router-dom';
import {data} from '../Utils/Utils'
import './Home.css'

export default class Info extends React.Component {
	
    render() {
		const {about} = data
        return(
            <div className = "about" id="about">
				<div className = "container-fluid">
					<div className = "row">
						<div className = "col-sm-12 col-md-12 text-center">
							<h1 className = "about-header">About Me</h1>
							<h3 className = "about-header-quote">Sharing a little bit of my story...</h3>	
						</div>
					</div>

					<div className = "row">
						<div className = "about-general-description ">
							<div className = "col-sm-8 col-md-8 ">
								<h2>General Overview</h2>
								<p>{about.description}</p>
							</div>
						</div>
					</div>

					<div className = "row">
						<div className = "about-statistic-description">
							<div className = "col-sm-8 col-md-8">
								<h2>Statistics</h2>
								<h5><em>And for those that don't fancy reading:</em></h5>
								<ul>
									{about.facts.map((fact,i)=><li key={i}>{fact}</li>)}
								</ul>
						
							</div>
						</div>
					</div>

					<Link to = "#contact" className = "btn btn-default btn-black-border">Contact</Link>

					
				</div>
            </div>
        )
    }

}