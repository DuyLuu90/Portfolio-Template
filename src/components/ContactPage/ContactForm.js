import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

export default class ContactForm extends React.Component {
    render() {
        return(
            <form className = "contact-form-body">
                <div className = "row name-input" >
                    <div className = "col-sm-6 col-md-6">
                        <div className = "firstname">
                            <h4>Full Name *</h4>
                            <input type = "text" placeholder= "First Name"/>
                        </div>
                    </div>

                    <div className = "col-sm-6 col-md-6">
                        <div className = "lastname">
                            <h4>Full Name *</h4>
                            <input type = "text" placeholder= "Last Name"/>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-sm-12 col-md-12">
                        <div className = "email">
                            <h4>Email *</h4>
                            <input type = "text" placeholder= "Email"/>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-sm-12 col-md-12">
                        <div className = "message">
                            <h4>Message *</h4>
                            <textarea placeholder= "Message"></textarea>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
                        <div className = "submit-contact">
                            <Link className = "btn btn-default btn-border" to = "#">Submit</Link>
                        </div>
                    </div>
                </div>
				
			</form>
					
        )
    }

}