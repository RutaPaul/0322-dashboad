import React, {useState, useEffect} from "react";
import SidebarLink from "./SidebarLink";
import "./sidebar.css";
import dashboardIcon from "../../icons/dashboard.svg";
import orderIcon from "../../icons/orders.svg";
import customersIcon from "../../icons/customers.svg";
import reportsIcon from "../../icons/reports.svg";
import integrationsIcon from "../../icons/integrations.svg";
import clipbordIcon from "../../icons/clipboard.svg";
import leftArrowIcon from "../../icons/leftArrow.svg";

const Sidebar = () => {
    const [linkClass, setLinkClass] = useState("sideBarLinkOpen");
    useEffect(() => {
        if(linkClass.includes("Determine")){
            document.getElementsByClassName("sidebar")[0].style.width == "5%" ? setLinkClass("sideBarLinkOpen") : setLinkClass("sideBarLinkClosed");
        }
        if(linkClass.includes("Closed")){
            document.getElementsByClassName("sidebar")[0].style.width="5%"
            document.getElementsByClassName("mainView")[0].style.width="95%"
        }
        if(linkClass.includes("Open")){
            document.getElementsByClassName("sidebar")[0].style.width="20%"
            document.getElementsByClassName("mainView")[0].style.width="80%"
        }
    })
     return (
        <div className="sidebar">
            <div className="sidebarArrow">
            <img src={leftArrowIcon} onClick={() => setLinkClass("sideBarLinkDetermine")}/>
            </div>
            <SidebarLink text="Dashboard" icon= {dashboardIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Orders" icon={orderIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Customers" icon={customersIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Reports" icon={reportsIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Integrations" icon={integrationsIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Current month" icon={clipbordIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Last Quarter" icon={clipbordIcon} link="test" linkClass={linkClass}></SidebarLink>
            <SidebarLink text="Year-end sale" icon={clipbordIcon} link="test" linkClass={linkClass}></SidebarLink>
        </div>
    )
}

export default Sidebar;