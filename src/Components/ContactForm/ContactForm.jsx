import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactAddSchema = Yup.object().shape({
    contactname: Yup.string().min(3, "Too Short! Min 3 letters!").max(50, "Too LOng! Max 50 letters!").required("This field is required!"),
    tel: Yup.string().min(3, "Too Short! Min 3 letters!").max(50, "Too LOng! Max 50 letters!").required("This field is required!")
});

const initialValues = {
    contactname: "",
    telefon: ""
}

export default function ContactForm() {
const nameFielId = useId();
const telFieldId = useId();



const contactAdd = (values, actions) => {
    actions.resetForm();
};

    return(
        <Formik initialValues={initialValues} onSubmit={contactAdd} validationSchema={contactAddSchema}>
            <Form className={css.form}>
                <div className={css.field}>
                <label htmlFor={nameFielId}>Name</label>
                <Field type="text" name="contactname" id={nameFielId} placeholder="Name" />
                <ErrorMessage name="contactname" />
                </div>

                <div className={css.field}>
                <label htmlFor={telFieldId}>Number</label>
                <Field type="tel" name="telefon" id={telFieldId} placeholder="Telefon" />
                <ErrorMessage name="telefon" />
                </div>

                <button className={css.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}