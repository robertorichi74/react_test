import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SliderInput, NumberInput, Labels } from "./../../Components";
import { CSSTransition } from "react-transition-group";
import {
  GetValidValue,
  GetNumberAmountFromNice,
  GetNiceAmount,
  ConvertMonths,
  GetErrorText
} from "./../../Helper";

export default function Combined(props) {
  const { min, max, step, changeValue, text, type } = props;
  const [value, setValue] = useState(props.value);
  const [errorShow, setErrorShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorShow) {
      var timeout;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        setErrorShow(false);  
      }, 2000);
    }
  }, [errorShow]);

  const handleInputValueChange = (e) => {
    let newValue = Number(GetNumberAmountFromNice(e.target.value));
    if (!newValue) {
      newValue = "";
    }
    setValue(newValue);
    changeValue({[type]:GetValidValue(newValue, min, max)});
  };

  const handleValueSliderChange = (e) => {
    let newValue = Number(e.target.value);
    setValue(newValue);
    changeValue({[type]:newValue});
    setErrorShow(false);
  };

  const handleInputValidation = (e) => {
    setErrorShow(false);
    let newValue = Number(GetNumberAmountFromNice(e.target.value));
    if (max < newValue || newValue < min) {
      setErrorShow(true);
      setErrorMessage(GetErrorText(newValue, min, max, type));
      newValue = GetValidValue(value, min, max);
      setValue(newValue);
      changeValue({[type]:newValue});
    }
  };

  const suffix = type === "amount" ? "Kč" : "";
  const convertValue = (val) => {
    if (type === "amount") {
      return GetNiceAmount(val);
    } else {
      return ConvertMonths(val);
    }
  };

  return (
    <>
      <div className="combined">
        <span className="title">{text}</span>
        <CSSTransition
          in={errorShow}
          timeout={200}
          classNames="error-container"
          unmountOnExit
        >
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        </CSSTransition>
        <NumberInput
          value={Number(value)}
          handleValue={handleInputValueChange}
          maxValue={max}
          minValue={min}
          handleValidation={handleInputValidation}
          suffix={suffix}
          convertValue={convertValue}
        />
        <SliderInput
          max={Number(max)}
          min={Number(min)}
          step={Number(step)}
          value={Number(GetValidValue(value, min, max))}
          handleValue={handleValueSliderChange}
        />

        <Labels max={max} min={min} type={type} />
      </div>
    </>
  );
}

Combined.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  changeValue: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};
