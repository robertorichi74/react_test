import PropTypes from "prop-types";

export default function NumberInput(props) {
  const { value, handleValue, handleValidation, suffix, convertValue } = props;
  let valueNice = convertValue(value);

  return (
    <>
      <div className="numberInput">
        <input
          type="text"
          onBlur={handleValidation}
          onChange={handleValue}
          className="value-box"
          value={valueNice}
        />
        &nbsp; {suffix}
      </div>
    </>
  );
}

NumberInput.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
  mminValue: PropTypes.number,
  handleValue: PropTypes.func
};
