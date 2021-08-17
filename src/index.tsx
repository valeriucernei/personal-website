import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { AboutPage } from 'pages/AboutPage/AboutPage'
import { ContactPage } from 'pages/ContactPage/ContactPage'
import { BlogPage } from 'pages/BlogPage/BlogPage'
import { history } from 'libs/history'

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />

      <Route path="/" exact={true}>
        <Redirect to="/about" exact={true} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)

reportWebVitals()
