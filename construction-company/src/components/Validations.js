const validateEmail = ({ email, setEmailError }) => {
  const emailRegular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return email && !email.match(emailRegular)
    ? setEmailError("Email not valid")
    : setEmailError("");
};

const validatePhone = ({ phone, setPhoneError }) => {
  const phoneRegular = /^\d{11}$/g;
  return phone && !phone.match(phoneRegular)
    ? setPhoneError("Email a valid phone number")
    : setPhoneError("");
};

const validateFullName = ({ name, setNameError }) => {
  const nameRegular = "/^[A-Za-zs]{2,}$/";
  return name && name.length === ""
    ? setNameError("Full Name cannot be empty")
    : name && name.length < 5
    ? setNameError("Full Name must be more than 5 letters")
    : setNameError("");
};

export { validateEmail, validatePhone, validateFullName };
