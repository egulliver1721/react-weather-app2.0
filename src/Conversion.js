import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celcius");
  if (unit === "celcius")
    return (
      <div className="Box CelciusConversion">
        <div>
          {" "}
          <a href="/">C°</a>
        </div>
        <div> | </div>
        <div>
          {" "}
          <a href="/">F°</a>
        </div>
      </div>
    );
}
