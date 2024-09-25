import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const { handleSignup } = useSignup(
    setIsAuthenticated,
    emailInput.value,
    passwordInput.value
  );

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput} />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
