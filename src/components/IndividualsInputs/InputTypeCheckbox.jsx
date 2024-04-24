// react
import { useState } from "react";

// proptypes
import PropTypes from "prop-types";

function InputTypeCheckbox() {
  const [agree, setAgree] = useState(false);

  const handleCheckboxChange = () => {
    setAgree(!agree);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={agree}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

InputTypeCheckbox.propTypes = {
  children: PropTypes.node,
};

export default InputTypeCheckbox;
