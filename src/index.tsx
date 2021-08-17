import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { AboutPage } from 'pages/AboutPage/AboutPage'
import { ContactPage } from 'pages/ContactPage/ContactPage'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />

            <Route path="/" exact={true}>
                <Redirect to="/about" exact={true} />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

reportWebVitals()
