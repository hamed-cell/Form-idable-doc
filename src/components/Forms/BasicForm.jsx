// proptypes
import PropTypes from "prop-types";

// inputs
import InputTypeText from "../IndividualsInputs/InputTypeText";
import InputTypeEmail from "../IndividualsInputs/InputTypeEmail";
import InputTypePassword from "../IndividualsInputs/InputTypePassword";
import InputTypeCheckbox from "../IndividualsInputs/InputTypeCheckbox";
import InputTypeButton from "../IndividualsInputs/InputTypeButton";

//css
import "../styles/Forms.css";

function BasicForm({ formName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="basic-form">
      <p>{formName}</p>

      <label> Nom </label>
      <InputTypeText placeholder=" Entrez votre nom" />

      <label> Prénom </label>
      <InputTypeText placeholder=" Entrez votre prénom" />

      <label> Age </label>
      <InputTypeText
        placeholder=" Entrez votre age"
        type="number"
        min="0"
        max="100"
      />

      <label> Email </label>
      <InputTypeEmail />

      <label> Mot de passe </label>
      <InputTypePassword />

      <InputTypeCheckbox />
      <label> J&apos;accepte de transmettre mes informations </label>

      <InputTypeButton onClick={handleSubmit}>
        Je crée mon compte
      </InputTypeButton>
    </div>
  );
}

BasicForm.propTypes = {
  formName: PropTypes.string,
};

export default BasicForm;
