import React, { Component } from 'react'
import avatar from '../images/avatar.jpg'
import {HashLink as Link} from 'react-router-hash-link'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className = 'card'>
                    <div className = 'card-image'>
                        <img className = 'activator' src ={avatar}  alt='activator'></img>
                        <Link className='btn-floating halfway-fab waves-effect waves-light red'>
                            <i className='material-icons activator'>more_vert</i>
                        </Link>
                    </div>
                    <div className='card-content'>
                        <span className='card-title activator grey-text text-darken-4' style={{fontWeight:'bold',fontSize:'21px'}}>
                            Doan Thi Anh Ly
                        </span>
                        <p>FRONT-END DEVELOPER INTERN</p>
                    </div>
                    <div className='card-reveal'>
                        <span className='card-title grey-text text-darken-4' style={{fontWeight:'bold'}}>
                            FOLLOW ME <i className='material-icons right'>close</i>
                        </span>
                        <p className='flex-container'>
                            <a href = "https://www.facebook.com/doan.ly.144"><i class="fab fa-facebook-f grey-text text-darken-4 social-style" aria-hidden="true"></i></a>
                            <a href = "https://www.instagram.com/anhlyy.2204/?hl=vi"><i class="fab fa-instagram grey-text text-darken-4 social-style" aria-hidden="true"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
