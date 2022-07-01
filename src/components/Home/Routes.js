import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import AboutCafe from './AboutCafe'
import ContactUs from './ContactUs'
import Promotions from './Promotions'


function Routes() {
    return (
        <div>
            <Router>
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/Menu" component={Menu}/>
               <Route exact path="/AboutCafe" component={AboutCafe}/>
               <Route exact path="/ContactUs" component={ContactUs}/>
               <Route exact path="/Promotions" component={Promotions}/>
            </Switch>
            </Router>
        </div>
    )
}

export default Routes
