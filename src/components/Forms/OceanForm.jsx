// proptypes
import PropTypes from "prop-types";

// inputs
import InputTypeText from "../IndividualsInputs/InputTypeText";
import InputTypeEmail from "../IndividualsInputs/InputTypeEmail";
import InputTypePassword from "../IndividualsInputs/InputTypePassword";
import InputTypeCheckbox from "../IndividualsInputs/InputTypeCheckbox";
import InputTypeButton from "../IndividualsInputs/InputTypeButton";
import InputTypeDate from "../IndividualsInputs/InputTypeDate";

//css
import "../styles/Forms.css";

function OceanForm({ formName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ocean-form">
      <p>{formName}</p>

      <label> Nom </label>
      <InputTypeText placeholder=" Entrez votre nom" />

      <label> Prénom </label>
      <InputTypeText placeholder=" Entrez votre prénom" />

      <label> Nombre de transat </label>
      <InputTypeText placeholder=" Nombre de transat" type="number" min="1" />

      <label> Date de la réservation </label>
      <InputTypeDate />

      <label> Email </label>
      <InputTypeEmail />

      <label> Mot de passe </label>
      <InputTypePassword />

      <div style={{ display: "flex", gap: "10px" }}>
        <InputTypeCheckbox />
        <label> J&apos;accepte de transmettre mes informations </label>
      </div>

      <InputTypeButton onClick={handleSubmit}>
        Je crée mon compte
      </InputTypeButton>
    </div>
  );
}

OceanForm.propTypes = {
  formName: PropTypes.string,
};

export default OceanForm;
