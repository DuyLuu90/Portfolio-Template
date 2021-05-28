import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import pinerest from '../../images/pinterest.png'
import email from '../../images/email.png'

export default class Footer extends React.Component {
    render() {
        return(
            <div className = "footer">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "media-links">
						<div className = "col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
							<div className = "facebook">
								<Link to = "#">
                                    <img className = "img-responsive" src = {facebook} alt = "facebook"/>
                                </Link>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "linkedin">
								<Link to = "#">
                                    <img className = "img-responsive" alt="LinkedIn" src = {linkedin}/>
                                </Link>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "pinterest">
								<Link to = "#">
                                    <img className = "img-responsive" alt="pinerest" src = {pinerest}/>
                                </Link>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "email-icon">
								<Link to = "#">
                                    <img className = "img-responsive" alt="email" src = {email}/>
                                </Link>
							</div>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-6 col-md-6 text-right">
						<div className = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div className = "col-sm-6 col-md-6 text-left">
						<div className = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-4 col-md-4 text-center">
						<div className = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "home-footer">
							<h4><a to = "#">Home</a></h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "portfolio-footer">
							<h4><a to = "#">Portfolio</a></h4>
							<ul>
								<li><a to = "#">Project1</a></li>
								<li><a to = "#">Project2</a></li>
								<li><a to = "#">Project3</a></li>
								<li><a to = "#">See All</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "resume-footer">
							<h4><a to = "#">Resume</a></h4>
							<ul>
								<li><a to = "#">Download</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "contact-footer">
							<h4><a to = "#">Contact</a></h4>
						</div>
					</div>
				</div>
			</div>
		</div> 
        )
    }

}