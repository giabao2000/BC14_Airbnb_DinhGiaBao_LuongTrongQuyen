export default function validateRegister(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (values.phone.length < 10 || values.phone.length > 10) {
    errors.phone = "Phone needs to be 10 numbers";
  }

  if (!values.birthday) {
    errors.birthday = "Birthday is required";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  return errors;
}
