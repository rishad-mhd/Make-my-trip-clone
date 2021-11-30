import React from 'react'
import './MenuOptions.css'

function MenuOptions() {
    return (
        <div className="optionParentDiv">
            <div className="optionChildDiv">
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/planeblack.png" alt="" />
                    </div>
                    <span>Flights</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/HotelBlack.png" alt="" />
                    </div>
                    <span className="">Hotels</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/HomeStayBlack.png" alt="" />
                    </div>
                    <span>Homestays</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/holidayPackage.png" alt="" />
                    </div>
                    <span>Holiday Packages</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/trainBlack.png" alt="" />
                    </div>
                    <span>Trains</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/busBlack.png" alt="" />
                    </div>
                    <span>Buses</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/carBlack.png" alt="" />
                    </div>
                    <span>Cabs</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/visaBlack.png" alt="" />
                    </div>
                    <span>Visa</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/charterBlack.png" alt="" />
                    </div>
                    <span>Charter Flights</span>
                </div>
                <div className="optionInnerDiv">
                    <div className="imageDiv">
                        <img src="/images/activityBlack.png" alt="" />
                    </div>
                    <span>Activities</span>
                </div>
            </div>
            <span></span>
        </div>
    )
}

export default MenuOptions
