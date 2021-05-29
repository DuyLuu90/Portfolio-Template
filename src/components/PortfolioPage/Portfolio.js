import React from 'react';
import { Link } from 'react-router-dom';
import {data,Project} from '../Utils/Utils'
import './Portfolio.css'

export default class Portfolio extends React.Component {

    render() {
		
		const {projects}= data ;
        return(
            <div className = "projects" >
				<div className = "container-fluid">
					<div className = "row">
						<div className = "col-sm-12 col-md-12 text-center">
							<h1>Projects and Portfolio</h1>
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>

					<div className = "row row-portfolio">
						{projects.map(props=>Project(props))}
					</div>

					<div className = "row">
						<div className = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
							<Link className = "btn btn-default btn-border" id='more-btn' to = "#">More Projects</Link>
						</div>
					</div>
				</div>
		</div>
        )
    }

}

