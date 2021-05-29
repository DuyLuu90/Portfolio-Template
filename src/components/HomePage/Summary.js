import React from 'react';
//import { Link } from 'react-router-dom';
import './Home.css'

import {SummarySection, data} from '../Utils/Utils'

export default class Summary extends React.Component {
    render() {
        return(
            <div className = "summary">
				<h1>Summary</h1>
				<div className = "container-fluid">
					<div className = "row">
						{data.summary.map(props=>SummarySection(props))}
					</div>
				</div>
			</div>
        )
    }

}

