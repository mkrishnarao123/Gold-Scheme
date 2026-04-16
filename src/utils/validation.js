export const validations = {
  emailValidations: [
    (v) => (v ? true : "Please enter E-mail id."),
    (v) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
        ? true
        : "Invalid E-mail id.",
  ],
  passwordValidations: [
    // Check if the password is provided
    (v) => (v ? true : "Please enter a password."),
    // Check if the password meets a minimum length requirement
    (v) =>
      v.length >= 8 ? true : "Password must be at least 8 characters long.",
    // Check if the password contains at least one uppercase letter
    (v) =>
      /[A-Z]/.test(v)
        ? true
        : "Password must contain at least one uppercase letter.",
    // Check if the password contains at least one lowercase letter
    (v) =>
      /[a-z]/.test(v)
        ? true
        : "Password must contain at least one lowercase letter.",
    // Check if the password contains at least one special character
    (v) =>
      /[!@#$%^&*(),.?":{}|<>]/.test(v)
        ? true
        : "Password must contain at least one special character.",
    // Check if the password contains at least one number
    (v) =>
      /[0-9]/.test(v) ? true : "Password must contain at least one number.",
  ],
};

export const FieldRequired = (val) => {
  return [(v) => (v ? true : `${val} is required`),];
};
