import React from 'react'
import MenuExplore from './MenuExplore/MenuExplore'
import MenuHeader from './MenuHeader/MenuHeader'
import MenuOptions from './MenuOptions/MenuOptions'
import MenuSearch from './MenuSearch/MenuSearch'

function Menu() {
    return (
        <div className="menu">
            <MenuHeader/>
            <MenuOptions/>
            <MenuSearch/>
            <MenuExplore/>
        </div>
    )
}

export default Menu
