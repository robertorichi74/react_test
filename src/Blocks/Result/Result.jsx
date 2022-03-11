import React, { useMemo } from "react";
import { GetNiceAmount, GetDefaultValues } from "./../../Helper";

export default function Result(props) {
  const { amount, rpsnValue } = props;
  const settings = useMemo(() => GetDefaultValues(), []);

  return (
    <>
      <div className="result">
        <p className="title">Nová hypotéka</p>
        <p>
          Měsíční splátka:{" "}
          <strong>
            {GetNiceAmount(amount)} {settings.currency}
          </strong>
        </p>
        <p>Roční úroková sazba od {rpsnValue}%</p>
        <p>RPSN {rpsnValue}%</p>
      </div>
    </>
  );
}
