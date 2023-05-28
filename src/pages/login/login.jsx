import { Button, Form as itemForm, Row, Typography } from "antd";
import "./login.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string()
    .min(3, "min value")
    .max(15, "max value")
    .required("Please provide a valid password"),
});
const { Title } = Typography;
export const Login = () => {
  return (
    <Row className="row__login" align={"middle"} justify={"center"}>
      <Title level={2}>LOGIN</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          useEffect(
            fetch(import.meta.env.VITE_API_URL + "/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
              },
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => localStorage.setItem("token", data.accessToken)),
            []
          );
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Field
                className="input__login mt-3"
                placeholder="Email"
                name="email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Field
                className="input__login mt-3"
                placeholder="Password"
                name="password"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <Row justify={"end"}>
              <button className="login__btn">
                Submit
              </button>
            </Row>
          </Form>
        )}
      </Formik>
    </Row>
  );
};
