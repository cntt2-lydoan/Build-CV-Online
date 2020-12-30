import React, { Component } from 'react'

export default class Educations extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6><strong>EDUCATIONS</strong></h6>
                        <table className='striped'>
                            <thead>
                                <tr>
                                    <th>Name of the University</th>
                                    <th>Date</th>
                                    <th>Certificate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DA NANG UNIVERSITY OF EDUCATION</td>
                                    <td>Sept 2017 - Present</td>
                                    <td>FreeCodeCamp</td>
                                    <td>
                                        <a href='https://www.freecodecamp.org/certification/fccaa0dd25c-9af1-46f5-b6c2-eaa6308698e9/javascript-algorithms-and-data-structures'><button>View</button></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
