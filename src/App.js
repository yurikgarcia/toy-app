import React from 'react';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Friends from './Friends';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Bar from './Bar'
// import DarkMode from './DarkMode'


// var ScrollArea = require('react-scrollbar');
// import PermanentDrawerLeft from './PermanentDrawerLeft'

// import Footer from './Footer';





function App() {


  return (
    
    <Router>

      

    <Bar/>  
    

        <div className="App">
      
          <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/aboutus" exact component={AboutUs}/>  
          <Route path="/friends" exact component={Friends}/>  
   
          </Switch>      
        </div>

        
    </Router>




  );
}


export default App;
      


