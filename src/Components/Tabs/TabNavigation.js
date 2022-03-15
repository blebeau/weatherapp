import React from "react";

const TabNavigation = ({
    id,
    title,
    activeTab,
    setActiveTab,
    setLocation
}) => {
    const handleClick = () => {
        setActiveTab(id);
        if (id === 'tab1') {
            setLocation('lat=33.44&lon=-94.04')
        }
        if (id === 'tab2') {
            setLocation('lat=35.75&lon=-139.75')
        }
        if (id === 'tab3') {
            setLocation('lat=42.97&lon=-82.40')
        }
    }

    return (
        <li
            onClick={handleClick}
            className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    );

};

export default TabNavigation;