import React from "react";
import StickyNote from "./StickyNote";
import jokes from "../../Data/jokes";

function Sticky() {
  return (
    <div className="relative">
      {jokes.map((joke) => (
        <StickyNote
          key={joke.id}
          text={joke.text}
          style={joke.style}
          icon={joke.icon}
          iconColor={joke.iconColor}
        ></StickyNote>
      ))}
    </div>
  );
}

export default Sticky;
