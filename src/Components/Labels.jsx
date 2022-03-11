import PropTypes from "prop-types";

export default function Lables(props) {
  const { min, max, type } = props;

  return (
    <>
      <div className="labels">
        <span className="labels-min">
          {min}
          {type === "amount" ? <span> Kč</span> : <span> Měsíců</span>}
        </span>
        <span className="labels-max">
          {max}
          {type === "amount" ? <span> Kč</span> : <span> Měsíců</span>}
        </span>
      </div>
    </>
  );
}

Lables.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string
};
