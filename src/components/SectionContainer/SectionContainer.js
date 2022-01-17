import React, { useState, useRef, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const SectionContainer = ({ sectionName, setActiveElement }) => {
  const [elementPosition, setElementPosition] = useState(0);
  const elementRef = useRef(null);

  useScrollPosition(
    ({ currPos }) => {
      setElementPosition(currPos.y);
    },
    [],
    elementRef
  );
  useEffect(() => {
    console.log(elementPosition);
    if (elementPosition === 0) {
      setActiveElement("welcome");
    } else if (elementPosition <= 50 && !(elementPosition < -500)) {
      setActiveElement(sectionName);
      console.log(sectionName);
    }
  }, [elementPosition]);
  return <div ref={elementRef}></div>;
};

export default SectionContainer;
