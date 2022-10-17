import React from 'react'
import './css/copyright.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

class CopyRight extends React.Component {
    render() {
        return (
            <div className='Copyright'>
                <div className='Copyright-1'>
                    <h1 style={{ positon: 'relative', left: '80px' }} >CustCare</h1>
                    <p style={{ position: 'relative', left: '100px' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                </div>

                <div className='Copyright-2' style={{ position: 'relative', left: '100px' }}>
                    <div>
                        <a href='#' target='_blank'><FaFacebook className='fb' /></a>
                    </div>
                    <div>
                        <a href='#'>  <FaInstagram className='ig' /> </a>
                    </div>
                    <div>
                        <a href='#' target='_blank'>  <FaLinkedin className='ln' /> </a>
                    </div>
                    <h3>CustCare © Copyright 2022 | All Rights Reserved</h3>
                </div>

            </div>
        );
    }
}

export default CopyRight