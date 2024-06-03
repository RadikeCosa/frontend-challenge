const SidebarElement = ({ icon, handleClick }) => {
  return (
    <div className="sidebar-link" onClick={handleClick ? handleClick : null}>
      <img src={icon} alt="" />
    </div>
  );
};
export default SidebarElement;
