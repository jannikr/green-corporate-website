import React, { useState } from "react";
import './Tabs.css'

/*
Tabs Code by blog.logrocket.com with minor adoptions
*/

const Tabs = () => {

    const tabTextOne = "$ npm create astro@latest"
    const tabTextTwo = "$ pnpm create astro@latest"
    const tabTextThree = "$ yarn create astro"

    const [activeTab, setActiveTab] = useState("1");
    const [tabText, setTabText] = useState(tabTextOne);

    const handleTab1 = () => {
        setActiveTab("1");
        setTabText(tabTextOne);
    };
    const handleTab2 = () => {
        setActiveTab("2");
        setTabText(tabTextTwo);
    };
    const handleTab3 = () => {
        setActiveTab("3");
        setTabText(tabTextThree)
    };

    return (
        <div className="tabs">
            <ul className="tabs-header">
                <li
                    className={activeTab === "1" ? "tab-selected" : ""}
                    onClick={handleTab1}
                >
                    NPM
                </li>
                <li
                    className={activeTab === "2" ? "tab-selected" : ""}
                    onClick={handleTab2}
                >
                    PNPM
                </li>
                <li
                    className={activeTab === "3" ? "tab-selected" : ""}
                    onClick={handleTab3}
                >
                    YARN
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