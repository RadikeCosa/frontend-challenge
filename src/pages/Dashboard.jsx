import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

import AnalisisComponent from "../components/AnalisisComponent";
import PuntuarComponent from "../components/puntuar/PuntuarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import Selects from "../components/puntuar/Selects";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-container">
        {activeComponent === "puntuar" && <PuntuarComponent />}
        {activeComponent === "analisis" && <AnalisisComponent />}
        <Selects />
      </div>
    </div>
  );
};

export default Dashboard;
