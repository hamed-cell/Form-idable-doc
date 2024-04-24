// react
import { useState } from "react";

function InputTypeEmail() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Adresse email invalide");
    } else {
      setEmailError("");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder=" Entrez votre email"
      />
      {emailError && <div className="error">{emailError}</div>}
    </div>
  );
}

export default InputTypeEmail;
