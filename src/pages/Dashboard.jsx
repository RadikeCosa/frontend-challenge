import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AnalisisComponent from "../components/AnalisisComponent";
import PuntuarComponent from "../components/puntuar/PuntuarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="dashboard-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-container">
        {activeComponent === "puntuar" && <PuntuarComponent />}
        {activeComponent === "analisis" && <AnalisisComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
