import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>     
                <div className='card'>
                    <div className='card-content'>
                        <h6><strong>EXPERIENCES</strong></h6>
                        <div className='row'>
                            <div className='col s12 m4 l4 xl4'>
                                <p className='teal year_exp white-text'>
                                    Sep <strong>2019</strong> - Oct
                                    <strong> 2019</strong>
                                </p>
                            </div>
                            <div className='col s12 m8 l8 xl8'>
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'>
                                        <strong>WEB EATDY</strong>
                                    </h6>
                                    <p>
                                    Developer <hr></hr>
                                    Main responsibilities: Layout design based on template.<hr></hr>
                                    Recognition and Gains: Complete 55% and enter the top 20 of the Hackathon Devfest 2019.<hr></hr>
                                    Link GitHub: https://gitlab.com/eatdyteam/eatdy
                                    </p>
                                </blockquote>
                            </div>
                            <div className='col s12 m4 l4 xl4'>
                                <p className='teal year_exp white-text'>
                                    Mar <strong>2020</strong> - Present
                                </p>
                            </div>
                            <div className='col s12 m8 l8 xl8'>
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'>
                                        <strong>WEB HIGHLANDS COFFEE</strong>
                                    </h6>
                                    <p>
                                    Developer <hr></hr>
                                    Main responsibilities: Layout design based on template,get API.<hr></hr>
                                    Link GitHub: https://github.com/cntt2-lydoan/HighlandCF2/tree/LY-Chuyen_component
                                    </p>
                                </blockquote>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>ACTIVITIES</strong>
                        </h6>
                        <div className='row'>
                            <div className='col s12 m4 l4 xl4'>
                                <p className='teal year_exp white-text'>
                                    Oct <strong>2019</strong> - Oct
                                        <strong> 2019</strong>
                                </p>
                            </div>
                            <div className='col s12 m8 l8 xl8'>
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'>
                                        <strong>GDG DEVFEST MIENTRUNG 2019</strong>
                                    </h6>
                                    <p>
                                    Developer <hr></hr>
                                    Developer in a team of 5, building a web application.<hr></hr>                                
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
