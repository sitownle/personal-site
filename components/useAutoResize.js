import { useState, useRef } from "react";

// TODO: Smooth out repositioning, prevent spam halfsize error, test in other layouts
export default function useAutoResize(config) {
  const [isExpanded, setIsExpanded] = useState(true);
  const targ = useRef();
  const expandedW = useRef(0);
  const dir = config.direction.toLowerCase();

  function toggle() {
    if (targ.current) {
      targ.current.style.transition = "all 0.25s linear";
      targ.current.style.maxHeight = `${targ.current.offsetHeight}px`;
      targ.current.style.whiteSpace = "nowrap";
      if (isExpanded) {
        expandedW.current =
          expandedW.current == 0 ? targ.current.offsetWidth : expandedW.current;
        targ.current.style.width = 0;
        if (dir == "right")
          targ.current.style.transform = `translateX(${expandedW.current}px)`;
        targ.current.style.opacity = 0;
        setIsExpanded(false);
      } else {
        targ.current.style.width = expandedW.current.toString() + "px";
        if (dir == "right") targ.current.style.transform = "translateX(0px)";
        targ.current.style.opacity = 1;
        setIsExpanded(true);
      }
    }
    return;
  }

  function toggleVert() {
    if (targ.current) {
      targ.current.style.transition = "all 0.25s linear";
      targ.current.style.maxWidth = `${targ.current.offsetWidth + 5}px`;
      if (isExpanded) {
        expandedW.current =
          expandedW.current == 0
            ? targ.current.offsetHeight
            : expandedW.current;
        targ.current.style.height = 0;
        if (dir == "down")
          targ.current.style.transform = `translateY(${expandedW.current}px)`;
        targ.current.style.opacity = 0;
        setIsExpanded(false);
      } else {
        targ.current.style.height = expandedW.current.toString() + "px";
        if (dir == "down") {
          targ.current.style.transform = "translateY(0px)";
        }
        targ.current.style.opacity = 1;
        setIsExpanded(true);
      }
    }
    return;
  }

  let o = config.orientation.toLowerCase();
  if (o == "width" || o == "horizontal") {
    return [toggle, targ];
  }
  if (o == "height" || o == "vertical") {
    return [toggleVert, targ];
  }

  throw new Error(
    "INVALID ORIENTATION ERROR: Orientation must be 'width', 'height', 'horizontal', or 'vertical', and Direction must be 'up', 'down', 'left', or 'right'"
  );
}
