import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Home from './../components/Home';
import Skill from './../components/Skill';
import Educations from './../components/Educations';
import Experience from './../components/Experience';

import Navbar from './../components/Navbar';
import Profile from './../components/Profile';
import About from './../components/About';
export default function Routes() {
    return (
        <Router>
            <div>
                {/* <Route path='/'  component = {Home}></Route> */}
                <section>
                    <Navbar />
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m4 l3">
                                <Profile />
                            </div>
                            <div className="col s12 m8 l9"><Switch>
                                <Route exact path="/" >

                                    <About />
                                    <Skill />
                                    <Educations />
                                    <Experience />

                                </Route>
                                <Route exact path='/skills' component={Skill}></Route>
                                <Route exact path='/educations' component={Educations}></Route>
                                <Route exact path='/experiences' component={Experience}></Route>
                                {/* <Route exact path='/navbar' component={Navbar}></Route> */}
                                <Route exact path='/profile' component={Profile}></Route>
                            </Switch>


                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </Router>
    );

}