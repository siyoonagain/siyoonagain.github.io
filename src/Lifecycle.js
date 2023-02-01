import React, { useState, useEffect } from "react";

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMount />}
    </div>
  );
};

const UnMount = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      console.log("UnMount!");
    };
  }, []);
  return <div>UnMount Testing Component</div>;
};

export default Lifecycle;
