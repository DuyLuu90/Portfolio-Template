import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import Contact from '../../components/ContactPage/Contact'

describe(`Contact Component`, () => {
    it ('Smoke Test-Render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <BrowserRouter>
            <Contact />
        </BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    });
})
