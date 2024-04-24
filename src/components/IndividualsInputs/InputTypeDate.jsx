// proptypes
import PropTypes from "prop-types";

function InputTypeDate({ ...restProps }) {
  return (
    <div>
      <input type="date" {...restProps} />
    </div>
  );
}

InputTypeDate.propTypes = {
  children: PropTypes.node,
};

export default InputTypeDate;
