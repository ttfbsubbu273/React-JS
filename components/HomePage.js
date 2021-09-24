import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavigationBar from "./Navbar/NavBar";

const HomePage=()=>{
    return(
       <Router>
           <NavigationBar>
           <main>
               <Switch>
               <Route path="/"><HomePage /></Route>
               <Route path="/logout"></Route>
               <Redirect to="/"></Redirect>
               </Switch>
           </main>
           </NavigationBar>
       </Router>
    )
}

export default HomePage;