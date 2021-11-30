import React from 'react'
import './MenuExplore.css'

function MenuExplore() {
    return (
        <div className="menuExploreParent">
            <div className="menuExploreChild">
                <div className="explore">
                    <img src="	https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png" alt="" />
                    <span>Explore More</span>
                    <img src="	https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png" alt="" />
                </div>
                <div className="explore-items">
                    <div className="items">
                        <img src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ti2.png" alt="" />
                        <span>Trip Ideas</span>
                    </div>
                    <div className="items">
                        <img src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_tm1.png" alt="" />
                        <div>
                            <span>Trip Money</span><br />
                            <span className="grey-text">Loans Credit & More</span>
                        </div>
                    </div>
                    <div className="items">
                        <img src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ng1.png" alt="" />
                        <span>Nearby GateWays</span>
                    </div>
                    <div className="items">
                        <img src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_gc1.png" alt="" />
                        <span>Gift Cards</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuExplore
