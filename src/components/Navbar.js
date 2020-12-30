
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Style.css';
export default class Navbar extends Component {
    render() {
        return (
            <>
            <nav className = 'light-blue darken-4'>
                <div className = 'container'>
                    <div className = 'nav-wrapper'>
                        <Link to = '/' className = 'brand-logo'>doanly</Link>
                        <Link to = '/' data-target='side-nav' className = 'sidenav-trigger'>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </Link>
                        <ul className = 'right hide-on-med-and-down'>
                            <li>
                                <Link to = '/'>
                                    <i class="fa fa-home" aria-hidden="true"></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to = '/skills'>
                                    <i class="fa fa-clipboard" aria-hidden="true"></i>Skills
                                </Link>
                            </li>
                            <li>
                                <Link to = '/experiences'>
                                    <i class="fa fa-briefcase" aria-hidden="true"></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to = '/educations'>
                                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>Educations
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <ul className='sidenav' id='side-nav'>
                <li>
                    <Link to = '/'>
                        <i class="fa fa-home" aria-hidden="true"></i>Home
                    </Link>
                </li>
                <li>
                    <Link to = '/skills'>
                        <i class="fa fa-clipboard" aria-hidden="true"></i>Skills
                    </Link>
                </li>
                <li>
                    <Link to = '/experiences'>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>Experiences
                    </Link>
                </li>
                <li>
                    <Link to = '/educations'>
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>Educations
                    </Link>
                </li>
            </ul>
        </>
        )
    }
}
