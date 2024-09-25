import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const password2 = useField("password");
  const { handleSignup } = useSignup(
    setIsAuthenticated,
    emailInput.value,
    passwordInput.value
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput.value !== password2.value) {
      alert("Passwords do not match");
      return;
    }
    handleSignup();
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
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
        <label>
          Confirm password:
          <input {...password2} />
        </label>
        <br />
        <button type="submit" >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupComponent;
