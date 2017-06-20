import React from 'react'

import Header from './Header'

import Nav from './Nav'

import Landing from './Landing'
import ClothingContainer from '../containers/ClothingContainer'
import SingleView from './SingleView'
import Account from './Account'
import PageNotFound from './PageNotFound'
import ErrorMessage from './ErrorMessage'
import Faq from './Faq'
import Terms from './Terms'
import Footer from './Footer'
import SignUpFormContainer from '../containers/SignUpFormContainer'
import SignInFormContainer from '../containers/SignInFormContainer'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

const App = () =>
   (
   <Router>
      <div className='app'>
         <Header />
         <div className="container-fluid">
           <Route component={Nav} />
           <Route component={ErrorMessage} />
           <Switch>
             <Route path="/" exact component={Landing} />
             <Route path="/clothing/:id" exact component={SingleView} />
             <Route path="/clothing" exact component={ClothingContainer} />
             <Route path="/signup" component={SignUpFormContainer}/>
             <Route path="/signin" component={SignInFormContainer}/>
             <Route path="/account/:id" component={Account}/>
             <Route path="/singleview" component={SingleView} />
             <Route path="/faq" component={Faq} />
             <Route path="/terms" component={Terms} />
             <Route component={PageNotFound} />
           </Switch>
          </div>
         <Footer />
      </div>
   </Router>
)
export default App
