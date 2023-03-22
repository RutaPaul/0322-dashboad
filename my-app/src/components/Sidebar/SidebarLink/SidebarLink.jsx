import React from "react";
import "./sidebarLink.css";

const SidebarLink = ({text, icon, link, linkClass}) => {
    return (
        <div className={linkClass}>
             <div className="sidebarLinkIcon">
                <img src={icon} />
            </div>
            <div className="sideBarLinkText">
                {text}
            </div>
        </div>
    )
}

export default SidebarLink;