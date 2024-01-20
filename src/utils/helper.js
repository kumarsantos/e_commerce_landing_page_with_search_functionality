export const isValidElement = (authData) => {
  const { email, password } = authData;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const result = {
    isValid: false,
    message: "",
  };

  if (
    passwordRegex.test(password) &&
    String(email).toLowerCase().match(emailRegex)
  ) {
    result.isValid = true;
    result.message = "";
  } else {
    result.isValid = false;
    result.message = "Please enter valid email and password";
  }
  return result;
};
