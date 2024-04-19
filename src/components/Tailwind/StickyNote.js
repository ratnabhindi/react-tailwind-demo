import React from "react";
import {
  FaLaughBeam,
  FaSmileWink,
  FaGrinStars,
  FaGrinTears,
  FaCoffee,
  FaHeart,
  FaCamera,
  FaTree,
  FaHome,
  FaBook,
} from "react-icons/fa";

function getIconComponent(iconName, color) {
  const iconStyle = { fontSize: "40px", color: color };
  switch (iconName) {
    case "FaLaughBeam":
      return <FaLaughBeam className="text-3xl mr-2" style={iconStyle} />;
    case "FaSmileWink":
      return <FaSmileWink className="text-3xl mr-2" style={iconStyle} />;
    case "FaGrinStars":
      return <FaGrinStars className="text-3xl mr-2" style={iconStyle} />;
    case "FaGrinTears":
      return <FaGrinTears className="text-3xl mr-2" style={iconStyle} />;
    case "FaCoffee":
      return <FaCoffee className="text-3xl mr-2" style={iconStyle} />;
    case "FaHeart":
      return <FaHeart className="text-3xl mr-2" style={iconStyle} />;
    case "FaCamera":
      return <FaCamera className="text-3xl mr-2" style={iconStyle} />;
    case "FaTree":
      return <FaTree className="text-3xl mr-2" style={iconStyle} />;
    case "FaHome":
      return <FaHome className="text-3xl mr-2" style={iconStyle} />;
    case "FaBook":
      return <FaBook className="text-3xl mr-2" style={iconStyle} />;

    default:
      return null;
  }
}

function StickyNote({ text, style, icon, iconColor }) {
  const IconComponent = getIconComponent(icon, iconColor);
  return (
    <div
      className={`p-3 max-w-xs text-sm md:text-base font-semibold rounded shadow-lg text-black flex items-center m-2 ${style}`}
    >
      {IconComponent}
      {text}
    </div>
  );
}

export default StickyNote;
