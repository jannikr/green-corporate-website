import React, { useState } from "react";
import './Tabs.css'

/*
Tabs Code by blog.logrocket.com with minor adoptions
*/

const Tabs = (props) => {

    const tabTitle = props.tabTitle
    const tabBody = props.tabBody

    const [activeTab, setActiveTab] = useState("1");
    const [tabText, setTabText] = useState(tabBody[0]);

    const handleTab1 = () => {
        setActiveTab("1");
        setTabText(tabBody[0]);
    };
    const handleTab2 = () => {
        setActiveTab("2");
        setTabText(tabBody[1]);
    };
    const handleTab3 = () => {
        setActiveTab("3");
        setTabText(tabBody[2])
    };

    return (
        <div className="tabs">
            <ul className="tabs-header">
                <li
                    className={activeTab === "1" ? "tab-selected" : ""}
                    onClick={handleTab1}
                >
                    {tabTitle[0]}
                </li>
                <li
                    className={activeTab === "2" ? "tab-selected" : ""}
                    onClick={handleTab2}
                >
                    {tabTitle[1]}
                </li>
                <li
                    className={activeTab === "3" ? "tab-selected" : ""}
                    onClick={handleTab3}
                >
                    {tabTitle[2]}
                </li>
            </ul>

            <ul className="tabs-content">
                <li className="tab">
                    <code>{tabText}</code>
                </li>
            </ul>
        </div>
    );
};
export default Tabs;