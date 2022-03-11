import React, { useState } from "react";
// import "./checkBox.css";
// import Currency from "./../../currency/Currency";
import PropTypes from "prop-types";

export default function CheckBox(props) {
  const { insurance, currency, changeValue } = props;
  const [check, setCheck] = useState(true);

  function handleCheck(event) {
    const check = event.target.checked;
    setCheck(check);
    changeValue({insurance:check});
  }

  return (
    <>
      <div className="insurance">
        <input id="insurance_box" type="checkbox" onChange={handleCheck} value={check} />
        <label className="insurance-label" htmlFor="insurance_box">
          {insurance} {currency} Pojištění úvěru
        </label>
      </div>
    </>
  );
}

CheckBox.propTypes = {
  insurance: PropTypes.number,
  currency: PropTypes.string,
  changeValue: PropTypes.func
};
