// proptypes
import PropTypes from "prop-types";

function InputTypeText({ ...restProps }) {
  return (
    <div>
      <input type="text" {...restProps} />
    </div>
  );
}

InputTypeText.propTypes = {
  children: PropTypes.node,
};

export default InputTypeText;
