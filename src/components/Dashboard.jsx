import { useState } from "react";
import AnalisisComponent from "./AnalisisComponent";
import PuntuarComponent from "./PuntuarComponent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");

  return (
    <>
      <Sidebar setActiveComponent={setActiveComponent} />
      {activeComponent === "puntuar" && <PuntuarComponent />}
      {activeComponent === "analisis" && <AnalisisComponent />}
    </>
  );
};

export default Dashboard;
