import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import Portfolio from '../../components/PortfolioPage/Portfolio'

describe(`Portfolio Component`, () => {
    it ('Smoke Test-Render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <BrowserRouter>
            <Portfolio />
        </BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    });
})
