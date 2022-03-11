import React, { useState } from "react";
import PropTypes from "prop-types";
import CombinedInput from "./CombinedInput";
import { CheckBox } from "./../../Components";

export default function Container(props) {
  const { PassData, settingsLocal } = props;

  const [amount, setAmount] = useState(settingsLocal.minAmount);
  const [months, setMonths] = useState(settingsLocal.minMonth);
  const [insurance, setInsurance] = useState(false);

  var timeout;
  const handleChangeAmount = (data) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (Object.keys(data)[0] === "amount") {
        setAmount(data.amount);
        PassData({
          amount: data.amount,
          months: months,
          insurance: insurance
        });
      } else if (Object.keys(data)[0] === "month") {
        setMonths(data.month);
        PassData({
          amount: amount,
          months: data.month,
          insurance: insurance
        });
      } else if (Object.keys(data)[0] === "insurance") {
        setInsurance(data.insurance);
        PassData({
          amount: amount,
          months: months,
          insurance: data.insurance
        });
      }
    }, 500);
  };

  return (
    <>
      <div className="calc-container">
        <CombinedInput
          min={settingsLocal.minAmount}
          max={settingsLocal.maxAmount}
          step={settingsLocal.stepAmount}
          changeValue={handleChangeAmount}
          value={amount}
          text={settingsLocal.amountTitle}
          type="amount"
        />
        <div style={{ height: "50px" }} />
        <CombinedInput
          min={settingsLocal.minMonth}
          max={settingsLocal.maxMonth}
          changeValue={handleChangeAmount}
          step={settingsLocal.stepMonth}
          value={months}
          text={settingsLocal.lengthTitle}
          type="month"
        />
        <CheckBox
          insurance={settingsLocal.insurance}
          currency={settingsLocal.currency}
          changeValue={handleChangeAmount}
        />
      </div>
    </>
  );
}

Container.propTypes = {
  props: PropTypes.object
};
