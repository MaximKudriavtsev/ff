import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className='home_footer'>
                <div className='home_footer_content-left'>
                    <div className='home_footer_content-left_vk' src='../src/images/vk.svg'></div>
                </div>
                <div className='home_footer_content-right'>
                    ©Finance Foundation 2017
                </div>
            </footer>
        )
    }
}