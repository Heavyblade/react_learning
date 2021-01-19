import React, { useEffect } from "react";

const Cockpit = () => {
  useEffect(() => {
    console.log("[Cockpit] ese es el useEffect");
  });

  return (
    <div>
      Desde CockPit Edit <code>src/App.js</code> and save to reload.
      <p>La version de React es {React.version}</p>
    </div>
  );
};

export default Cockpit;
