import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Min 2").max(15).required("Name is required"),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(/^[a-z0-9]{6,}$/i)
    .required(),
  repeatPassword: Yup.string().oneOf([Yup.ref('password')]).required()
});

const Register = () => {
  
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Name:" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email:" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password:" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <Field
                type="password"
                name="repeatPassword"
                placeholder="Repeat password:"
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
