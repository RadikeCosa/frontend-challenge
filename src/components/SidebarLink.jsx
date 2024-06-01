/* eslint-disable react/prop-types */

const SidebarLink = ({ onClick, svgProps, pathProps, label }) => {
  return (
    <div className="puntuar" onClick={onClick}>
      <svg {...svgProps}>
        <path {...pathProps} />
      </svg>
      {label}
    </div>
  );
};

export default SidebarLink;
