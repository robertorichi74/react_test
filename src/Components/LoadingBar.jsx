import React, { useState, useEffect } from "react";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Bar(props) {
  const [value, setValue] = useState(0);
  const { showBar } = props;

  useEffect(() => {
    if (showBar) {
      setTimeout(() => {
        setValue(value === 100 ? 0 : value + 5);
      }, 30);
    } else {
      setValue(1);
    }
  }, [value, showBar]);

  if (showBar) {
    return (
      <div className="loading-bar" style={{ padding: "40px 40px 40px 40px" }}>
        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: "#f00",
            trailColor: "transparent"
          })}
        >
          <div style={{ width: "84%" }}>
            <CircularProgressbar
              value={value === 100 ? 0 : value + 30}
              styles={buildStyles({
                trailColor: "transparent"
              })}
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    );
  } else {
    return <></>;
  }
}
