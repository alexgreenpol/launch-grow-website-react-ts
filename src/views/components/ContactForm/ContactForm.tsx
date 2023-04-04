import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import "./ContactForm.scss";

interface ProductsFormValues {
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

const ProductsFormSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});

const ContactForm = () => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                name: "",
                lastname: "",
                phone: "",
                email: "",
            }}
            validationSchema={ProductsFormSchema}
            onSubmit={(values: ProductsFormValues) => {
                alert("Success");
                navigate("/");
            }}
        >
            {({ errors, touched }) => (
                <Form className="contact-form">
                    <div className="contact-form__input">
                        <InputField
                            name="name"
                            label="First name"
                            errorField={errors.name}
                            touchField={touched.name}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="lastname"
                            label="Last name"
                            errorField={errors.lastname}
                            touchField={touched.lastname}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="phone"
                            label="Phone"
                            errorField={errors.phone}
                            touchField={touched.phone}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="email"
                            label="Email"
                            errorField={errors.email}
                            touchField={touched.email}
                        />
                    </div>

                    <Button>Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
