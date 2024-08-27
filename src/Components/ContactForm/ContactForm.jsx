import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactAddSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short! Min 3 letters!")
    .max(50, "Too Long! Max 50 letters!")
    .required("This field is required!"),
  contactTelephone: Yup.string()
    .min(3, "Too Short! Min 3 digits!")
    .max(50, "Too Long! Max 50 digits!")
    .required("This field is required!"),
});

const initialValues = {
  contactName: "",
  contactTelephone: "",
};

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.contactName,
      number: values.contactTelephone,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  const nameFielId = nanoid();
  const telFieldId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactAddSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameFielId}>Name</label>
          <Field
            type="text"
            name="contactName"
            id={nameFielId}
            placeholder="Name"
          />
          <ErrorMessage
            name="contactName"
            component="div"
            className={css.error}
          />
        </div>

        <div className={css.field}>
          <label htmlFor={telFieldId}>Number</label>
          <Field
            type="tel"
            name="contactTelephone"
            id={telFieldId}
            placeholder="Telephone"
          />
          <ErrorMessage
            name="contactTelephone"
            component="div"
            className={css.error}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
