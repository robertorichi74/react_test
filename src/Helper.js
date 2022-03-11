import PropTypes from "prop-types";

export const GetDefaultValues = () => {
  return {
    minAmount: 5000,
    maxAmount: 2500000,
    stepAmount: 1000,
    minMonth: 3,
    maxMonth: 120,
    stepMonth: 1,
    insurance: 150,
    rpsn: 4.12,
    currency: "Kč",
    amountTitle: "Kolik byste si u nás rádi půjčili?",
    lengthTitle: "Délkou splácení si určete výšku splátky"
  };
};

export const GetNumberAmountFromNice = (value) => {
  console.log(value);
  if (value.length === 0) {
    return "";
  }

  return Number(value.toString().replace(/\s+/g, "").trim());
};

export const GetValidValue = (value, min, max) => {
  return value <= min ? min : value >= max ? max : value;
};

export const GetNiceAmount = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const GetNiceMonths = (amount) => {
  return amount;
};

export const GetErrorText = (value, min, max, type) => {
  if (value < min) {
    return GetErrorMessages(min, max)[type].min;
  }
  if (value > max) {
    return GetErrorMessages(min, max)[type].max;
  }
  return "";
};

export const GetErrorMessages = (min, max) => {
  return {
    amount: {
      min:
        "Je nám líto, ale minimální částka je " + GetNiceAmount(min) + " Kč.",
      max: "Je nám líto, ale maximální částka je " + GetNiceAmount(max) + " Kč."
    },
    month: {
      min: "Je nám líto, ale minimální počet měsíců je " + GetNiceMonths(min),
      max: "Je nám líto, ale maximální počet měsíců je " + GetNiceMonths(max)
    }
  };
};

export function ConvertMonths(val) {
  return val;
}

GetErrorText.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string
};

GetErrorMessages.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};
