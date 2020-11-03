import * as yup from "yup";

function buildErrors(err) {
  let errors = {};

  err.inner.map((element) => {
    if (!errors[element.path]) {
      errors[element.path] = element.message;
    }
  });

  return errors;
}

async function validateLogin(values) {
  try {
    await yup
      .object({
        email: yup
          .string()
          .required("Email is required")
          .email("Email must be valid"),
        password: yup
          .string()
          .required("Password is required")
          .min(8, "Password must be more than 8 characters"),
      })
      .validate(values, { abortEarly: false });
  } catch (err) {
    throw buildErrors(err);
  }
}

async function validateSetPassword(values) {
  try {
    await yup
      .object({
        password: yup
          .string()
          .required("Password is required")
          .min(8, "Password must be more than 8 characters"),
        passwordConfirmation: yup
          .string()
          .required("Confirmation password is required")
          .oneOf([yup.ref("password"), null], "Passwords must match"),
      })
      .validate(values, { abortEarly: false });
  } catch (err) {
    throw buildErrors(err);
  }
}

async function validateRequestResetPassword(values) {
  try {
    await yup
      .object({
        email: yup
          .string()
          .required("Email is required")
          .email("Email must be valid"),
      })
      .validate(values, { abortEarly: false });
  } catch (err) {
    throw buildErrors(err);
  }
}

export { validateLogin, validateSetPassword, validateRequestResetPassword };
