import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DisplayFooter = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowFooter(true);
    } else if (location.pathname === "/registr") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};

export default DisplayFooter;