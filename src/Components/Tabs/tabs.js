import React, { useState } from "react";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavigation title="Ottawa" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavigation>
                <TabNavigation title="Tokyo" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavigation>
                <TabNavigation title="Sarnia" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}></TabNavigation>
            </ul>
            <div className="displayed">
                <TabContent id="tab1" activeTab={activeTab}>
                    <p>1</p>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <p>2</p>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <p>3</p>
                </TabContent>
            </div>
        </div>
    )
}

export default Tabs;