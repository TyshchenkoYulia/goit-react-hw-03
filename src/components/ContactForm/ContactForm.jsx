import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactForm({ values, onAddUser, validation }) {
  const userName = useId();
  const userTelNumber = useId();

  const handelSubmit = (values, action) => {
    onAddUser(values);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={handelSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <label className={css.text} htmlFor={userName}>
          Name
        </label>
        <Field className={css.field} name="name" id={userName} />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />

        <label className={css.text} htmlFor={userTelNumber}>
          Number
        </label>
        <Field className={css.field} name="telNumber" id={userTelNumber} />
        <ErrorMessage
          className={css.errorMessage}
          name="telNumber"
          component="span"
        />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
