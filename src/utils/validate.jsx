export const checkValidateData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassowrdValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPassowrdValid && !isEmailValid)
    return "❌ Email ID and Password are not valid";
  if (!isEmailValid) return "❌ Email ID is not valid";
  if (!isPassowrdValid) return "❌ Password is not valid";
  return null;
};
