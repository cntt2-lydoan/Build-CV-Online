import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>SUMMARY</strong>
                        </h6>
                        <p className='grey-text'> 
                        I look forward to learning good design and coding skills, as well as the ability to convert customer requirement intointeresting online applications.
                        I hope that will be a great experience form one may career path and I want to stayhere to develop myself.
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className='row mt'>
                            <div className='col s12 m6 l6 xl6'>
                                <p><strong>Address: </strong>Quang Nam</p>
                                <p><strong>Email: </strong>doananhly1999@gmail.con</p>
                                <p><strong>Phone: </strong>0364185482</p>
                            </div>
                            <div className='s12 m6 l6 xl6'>
                                <p><strong>Main Language: </strong>Vietnamese</p>
                                <p><strong>Second Language: </strong>English</p>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
