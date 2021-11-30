import React from 'react'
import './MenuHeader.css'

function MenuHeader() {
    return (
        <div className="menuParentDiv">
            <div className="header">
                <div className="logo">
                    <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" alt="" />
                </div>
                <div className="header-items">
                    <div className="MyBizImg">
                        <img src="/images/Mybiz icon.png" alt="" />
                    </div>
                    <div className='MyBizLink'>
                        <span>Introducing myBiz</span>
                        <span>MakeMyTrip for Business</span>
                    </div>
                    <div className="MyBizImg">
                        <img style={{ marginBottom: "0", height: "27px", width: "17px", paddingTop:'5px' }} src="/images/my travel Icon.png" alt="" />
                    </div>
                    <div className='MytripsLink'>
                        <span>MyTrips</span>
                        <span>Manage your bookings</span>
                    </div>
                    <div className="login">
                        <img src="/images/my icon.png" alt="" />
                        <span>Login or Create Account</span>
                    </div>
                    <div className="language-settings">
                        <img src="/images/india flag.png" alt="" />
                        <span>IN | ENG | INR</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader
