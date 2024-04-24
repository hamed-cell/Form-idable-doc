// Proptypes
import PropTypes from "prop-types";

function InputTupeButton({ children, ...restProps }) {
  return <button {...restProps}>{children}</button>;
}

InputTupeButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputTupeButton;
