import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { validateLogin } from "../validation";
import Api from "helpers/api";
import { setCookie } from "helpers/utils";
import { Button, Input, Panel } from "rsuite";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      isRemembered: false,
    },
    onSubmit: (values, { setErrors }) => {
      validateLogin(values)
        .then(() => {
          const filteredValues = { ...values };
          delete filteredValues.isRemembered;
          console.log(filteredValues);
          setLoading(true);
          new Api()
            .login(filteredValues)
            .then((res) => {
              setCookie("ACCESS_TOKEN", res.data.access_token);
              setCookie("DOMAIN", res.data.domain);
              setCookie("USER_NAME", res.data.fullName);
              setCookie("EMAIL", res.data.email);
              setCookie("ID", res.data.id);
              if (values.isRemembered) {
                setCookie("REFRESH_TOKEN", res.data.refreshToken);
              }
            //   switch (res.data.domain) {
            //     case "freelancer":
            //       history.push("/freelancer/dashboard");
            //       break;

            //     case "client":
            //       history.push("/client/dashboard");
            //       break;

            //     case "god":
            //       history.push("/god/projects");
            //       break;

            //     default:
            //       break;
            //   }
            window.location.href('/dashboard')
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => setLoading(false));
        })
        .catch((err) => {
          setErrors(err);
        });
    },
  });

  return (
    <Panel>
      <>
        <p textAlign="center" size="20px" bold style={{ margin: "auto" }}>
          Log in to your accountProjects
        </p>
        <p as="b2" color="black40" style={{ margin: "auto" }}>
          Log in connect with the right writers in 24 hours
        </p>
      </>

      <form onSubmit={formik.handleSubmit}>
        <input
          label="EMAIL"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onFocus={() => formik.setFieldError("email", "")}
          error={formik.errors.email}
          placeholder="Enter your email address"
          fluid
        />
        <input
          label="PASSWORD"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onFocus={() => formik.setFieldError("password", "")}
          error={formik.errors.password}
          placeholder="Enter your password (at least 8 characters)"
          fluid
        />
        {/* <div justifyContent="space-between">
          <div>
            <div alignItems="center">
              <Input
                id="isRemembered"
                name="isRemembered"
                type="checkbox"
                checked={formik.values.isRemembered}
                onChange={() =>
                  formik.setValues({
                    ...formik.values,
                    isRemembered: !formik.values.isRemembered,
                  })
                }
                value={formik.values.isRemembered}
              />
              <label htmlFor="isRemembered" style={{ cursor: "pointer" }}>
                <p
                  as="b1"
                  color="black40"
                  inline
                  style={{ marginLeft: "10px" }}
                >
                  Remember me
                </p>
              </label>
            </div>
          </div>
          <div>
            <Link to="/auth/forgot-password">
              <p as="b1" color="black60">
                Forget password?
              </p>
            </Link>
          </div>
        </div> */}
        <Button color="blue100" fluid bold type="submit" loading={loading}>
          Log in
        </Button>
      </form>
    </Panel>
  );
}
