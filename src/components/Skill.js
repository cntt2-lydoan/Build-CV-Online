import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6>
                            <strong>PROFESSIONL SKILLS</strong>
                        </h6>
                        <div className='row mt-top'>
                            <div className='col s6'>
                                <p>HTML & CSS</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'90%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>JAVASCRIPT</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'75%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>REACT JS</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'87%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>JAVA SPRING BOOT </p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'50%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>SQL SERVER</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'70%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>FIREBASE</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'80%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>OFFICE</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>GIT</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue' style={{width:'89%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
