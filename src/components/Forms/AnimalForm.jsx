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

function AnimalForm({ formName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="animal-form">
      <p>{formName}</p>

      <label> Nom </label>
      <InputTypeText placeholder=" Entrez votre nom" />

      <label> Prénom </label>
      <InputTypeText placeholder=" Entrez votre prénom" />

      <label> Age de votre animal </label>
      <InputTypeText
        placeholder=" Entrez l'age de votre animal"
        type="number"
        max="20"
      />

      <label> Famille de votre animal </label>
      <InputTypeText placeholder=" Entrez la famille de votre animal" />

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

AnimalForm.propTypes = {
  formName: PropTypes.string,
};

export default AnimalForm;
