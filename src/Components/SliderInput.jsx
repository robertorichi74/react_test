import PropTypes from "prop-types";
import React from "react";

export default function Slider(props) {
  const { min, max, step, value, handleValue } = props;

  return (
    <>
      <div className="rangeInput">
        <input
          type="range"
          className="slider"
          onChange={handleValue}
          min={min}
          max={max}
          value={value}
          step={step}
        />
      </div>
    </>
  );
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  handleValue: PropTypes.func,
  handleValidations: PropTypes.func
};
