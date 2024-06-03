/* eslint-disable react/prop-types */
import { useAuth } from "../../context/AuthContext";
import "../../styles/sidebar.css";
import SidebarElement from "./SidebarElement";
import { useState, useEffect } from "react";

import puntuarOpen from "../../assets/puntuarOpen.svg";
import logoutOpen from "../../assets/logoutOpen.svg";
import movieLogoOpen from "../../assets/movieLogoOpen.svg";
import analisisOpen from "../../assets/analisisOpen.svg";
import configOpen from "../../assets/configOpen.svg";
import sidebarOpen from "../../assets/sidebarOpen.svg";

import puntuarClose from "../../assets/puntuarClose.svg";
import logoutClose from "../../assets/logoutClose.svg";
import movieLogoClose from "../../assets/movieLogoClose.svg";
import analisisClose from "../../assets/analisisClose.svg";
import configClose from "../../assets/configClose.svg";
import sidebarClose from "../../assets/sidebarClose.svg";

const Sidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("toggle");
  };

  const sidebarWidth = isOpen ? "336px" : "100px";
  const iconPuntuar = isOpen ? puntuarOpen : puntuarClose;
  const iconAnalisis = isOpen ? analisisOpen : analisisClose;
  const iconConfiguracion = isOpen ? configOpen : configClose;
  const iconMovieLogo = isOpen ? movieLogoOpen : movieLogoClose;
  const iconSidebar = isOpen ? sidebarOpen : sidebarClose;
  const iconLogout = isOpen ? logoutOpen : logoutClose;

  return (
    <div className="sidebar-container" style={{ width: sidebarWidth }}>
      <div className="sidebar-logo">
        <SidebarElement icon={iconMovieLogo} />
      </div>
      <div className="links">
        <SidebarElement icon={iconPuntuar} />
        <SidebarElement icon={iconAnalisis} />
        <SidebarElement icon={iconConfiguracion} />
        <hr />
      </div>
      <div className="sidebar-logout">
        <SidebarElement icon={iconSidebar} handleClick={toggleSidebar} />
        <SidebarElement icon={iconLogout} />
      </div>
    </div>
  );
};

export default Sidebar;
