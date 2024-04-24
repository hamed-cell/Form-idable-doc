// react
import { useState } from "react";

// assets
// import eye from "../../assets/eye.svg";
// import eyeOff from "../../assets/eye-off.svg";

function InputTypePassword() {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!validatePassword(value)) {
      setPasswordError();
    } else {
      setPasswordError("Password valide");
    }
  };

  // const togglePasswordVisibility = () => {
  //   setPasswordVisible(!passwordVisible);
  // };

  return (
    <>
      <div>
        <input
          placeholder=" Entrez votre mot de passe"
          value={password}
          onChange={handlePasswordChange}
          // type={passwordVisible ? "text" : "password"}

        />
        {passwordError && <div className="error">{passwordError}</div>}

        {/* <img
          alt="Eye Icon"
          src={passwordVisible ? eye : eyeOff}
          onClick={togglePasswordVisibility}
        /> */}
      </div>
    </>
  );
}

export default InputTypePassword;
