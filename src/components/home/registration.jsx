import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DisplayNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavbar(true);
    } else if (location.pathname === "/registr") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default DisplayNavbar;